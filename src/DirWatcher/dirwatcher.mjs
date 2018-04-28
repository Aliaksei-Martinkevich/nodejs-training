import fs from 'fs';
import EventEmitter from 'events';
import util from 'util';

const readdir = util.promisify(fs.readdir);

/**
 * @export
 * @class DirWatcher
 * @extends {EventEmitter}
 */
export class DirWatcher extends EventEmitter {
  /**
   * @param {string} path
   * @param {number} delay
   */
  constructor(path, delay) {
    super();
    /** @type {string} */
    this.path = path;
    /** @type {number} */
    this.delay = delay;
    /** @type {Set<string>} */
    this.previousFiles = new Set();
    /** @type {NodeJS.Timer} */
    this.interval = null;
  }

  /**
   * @private
   * @param {string[]} files
   */
  setFiles(files) {
    const newFiles = files.filter(fileName => !this.previousFiles.has(fileName));
    if (newFiles.length !== 0) {
      this.emit('changed', newFiles);
    }
    this.previousFiles = new Set(files);
  }

  watch() {
    if (this.interval) {
      this.stopWatch();
    }

    this.interval = setInterval(async () => {
      const files = await readdir(this.path);
      this.setFiles(files);
    }, this.delay);
  }

  stopWatch() {
    clearInterval(this.interval);
  }
}
