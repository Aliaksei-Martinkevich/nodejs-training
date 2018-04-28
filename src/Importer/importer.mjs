import fs from 'fs';
import parse from 'csv-parse';
import parseSync from 'csv-parse/lib/sync';
import util from 'util';

const readFile = util.promisify(fs.readFile);
const parseAsync = util.promisify(parse);

export class Importer {
  /**
   * @static
   * @param {string} path
   * @returns {Promise<Array<Object<string, *>>>}
   */
  static async import(path) {
    const file = await readFile(path);
    return parseAsync(file, { columns: true });
  }

  /**
   * @static
   * @param {string} path
   * @returns {Array<Object<string, *>>}
   */
  static importSync(path) {
    const file = fs.readFileSync(path);
    return parseSync(file, { columns: true });
  }
}

