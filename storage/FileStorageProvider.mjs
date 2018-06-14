import fs from 'fs';

import Storage from './Storage';


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
    this.storage = new Storage(data);
    this.storage.on('change', this.commitToFile);
  }

  commitToFile() {
    return fs.writeFileSync(this.path, this.storage.toJSONString());
  }
}
