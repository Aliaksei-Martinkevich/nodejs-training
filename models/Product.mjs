
import uuidv4 from '../helpers/uuidv4';


export class Product {
  constructor({
    name,
    reviews = [],
    id = uuidv4(),
  }) {
    this.name = name;
    this.reviews = reviews;
    this.id = id;
  }
}
