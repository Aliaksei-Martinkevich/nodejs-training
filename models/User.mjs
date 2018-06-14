import uuidv4 from '../helpers/uuidv4';

export class User {
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
  }
}
