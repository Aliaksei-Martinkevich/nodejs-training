import commander from 'commander';
import through2 from 'through2';
import fs from 'fs';
import parse from 'csv-parse';
import util from 'util';
import path from 'path';


const parseAsync = util.promisify(parse);
const readdir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const assertValidFile = (fileName) => {
  if (!fileName) {
    console.error('This option require file');
    commander.help();
  }

  if (typeof fileName !== 'string') {
    console.error('File should be a string');
    process.exit(1);
  }

  if (!fs.existsSync(fileName)) {
    console.error(`File not found: ${fileName}`);
    process.exit(1);
  }
};

function reverseTransform(chunk, _, next) {
  this.push(Array
    .from(chunk.toString())
    .reverse()
    .join(''));

  return next();
}

function uppercaseTransform(chunk, _, next) {
  this.push(chunk.toString().toUpperCase());

  return next();
}

async function csvParseTransform(chunk, _, next) {
  const content = await parseAsync(chunk.toString(), {
    columns: true,
  });
  this.push(JSON.stringify(content));
  next();
}

const reverse = () => process.stdin
  .pipe(through2(reverseTransform))
  .pipe(process.stdout);

const transform = () => process.stdin
  .pipe(through2(uppercaseTransform))
  .pipe(process.stdout);

const outputFile = file => fs
  .createReadStream(file)
  .pipe(process.stdout);

const convertFromFile = file => fs
  .createReadStream(file)
  .pipe(through2(csvParseTransform))
  .pipe(process.stdout);

const convertToFile = file => fs
  .createReadStream(file)
  .pipe(through2(csvParseTransform))
  .pipe(fs.createWriteStream(file.replace('.csv', '.json')));

const cssBundler = async (folder) => {
  const dir = await readdir(folder);
  const cssFiles = dir.filter(file => path.extname(file) === '.css');

  const contents = await Promise.all([
    ...cssFiles.map(pathToFile => path.join(folder, pathToFile)),
    './nodejs-homework3.css',
  ].map(pathToFile => readFile(pathToFile)));

  return writeFile(path.join(folder, 'bundle.css'), contents.join('\n'));
};

commander
  .option('-t, --task [taskName]', 'Function to be called')
  .option('-f, --file [filePath]', 'File to be processed')
  .option('-p, --path [pathToFolder]', 'Folder with css files')
  .parse(process.argv);

if (!commander.task) {
  commander.help();
}

switch (commander.task) {
  case 'reverse':
    reverse(commander.file);
    break;
  case 'transform':
    transform(commander.file);
    break;
  case 'outputFile':
    assertValidFile(commander.file);
    outputFile(commander.file);
    break;
  case 'convertFromFile':
    assertValidFile(commander.file);
    convertFromFile(commander.file);
    break;
  case 'convertToFile':
    assertValidFile(commander.file);
    convertToFile(commander.file);
    break;
  case 'cssBundler':
    assertValidFile(commander.path);
    cssBundler(commander.path);
    break;
  default:
    commander.help();
    break;
}
