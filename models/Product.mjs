
import uuidv4 from '../helpers/uuidv4';


export class Product {
  constructor(name, reviews = []) {
    this.name = name;
    this.reviews = reviews;
    this.id = uuidv4();
  }
}
