import path from 'path';

import config from './config/config.json';
import { Product, User } from './models';

import { Importer } from './src/Importer/importer';
import { DirWatcher } from './src/DirWatcher/dirwatcher';

console.log(`Application name: ${config.name}`);

// eslint-disable-next-line no-unused-vars
const user = new User();
// eslint-disable-next-line no-unused-vars
const product = new Product();

new DirWatcher(config.dataDir, 100)
  .on('changed', changes => changes
    .filter(filename => path.extname(filename).toLowerCase() === '.csv')
    .forEach(async (filename) => {
      const filePath = path.join(config.dataDir, filename);
      const fileContent = await Importer.import(filePath);
      const fileContentString = JSON.stringify(fileContent);
      console.log(`File '${filename}' added:\n${fileContentString}`);
    }))
  .watch();
