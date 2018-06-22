import fs from 'fs';

import Storage from './Storage';
import { User, Product } from '../models';


export default class FileStorageProvider {
  constructor(path) {
    this.path = path;
    this.storage = null;
    this.commitToFile = this.commitToFile.bind(this);
  }

  initFromFile() {
    if (this.storage) {
      this.removeListener('change', this.commitToFile);
    }

    const file = fs.readFileSync(this.path);
    const data = JSON.parse(file);
    this.storage = new Storage({
      users: data.users.map(userObject => new User(userObject)),
      products: data.products.map(productObject => new Product(productObject)),
    });
    this.storage.on('change', this.commitToFile);
  }

  commitToFile() {
    return fs.writeFileSync(this.path, this.storage.toJSONString());
  }
}
