import events from 'events';

export default class Storage extends events.EventEmitter {
  /**
   * @param {Array<Product>} products
   * @param {Array<User>} users
   */
  constructor({ products = [], users = [] } = {}) {
    super();
    this.products = products;
    this.users = users;
  }

  /**
   * @returns {Array<Product>}
   */
  getProducts() {
    return this.products;
  }

  /**
   * @param {string} id
   * @returns {Array<Product>}
   */
  getProductById(id) {
    return this.products.find(product => product.id === id) || null;
  }

  /**
   * @param {Product} product
   * @returns {Array<Product>}
   */
  addProduct(product) {
    this.products.push(product);
    this.emit('change');
  }

  /**
   * @returns {Array<User>}
   */
  getUsers() {
    return this.users;
  }

  toJSONString() {
    return JSON.stringify({
      products: this.products,
      users: this.users,
    }, null, 2);
  }
}
