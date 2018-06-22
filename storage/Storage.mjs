import events from 'events';

import { User } from '../models/User';


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
   * @param {User} user
   */
  addUser(user) {
    this.users.push(user);
    this.emit('change');
  }

  /**
   * @returns {Array<User>}
   */
  getUsers() {
    return this.users;
  }

  /**
   * @param {*} data
   * @returns {User}
   */
  findOrCreateUser(data) {
    const user = this.findUser(data);

    if (user) return user;

    const newUser = new User(data);
    this.addUser(newUser);
    return newUser;
  }

  findUser(userData) {
    return this.users
      .find(user => Object.entries(userData)
        .every(([key, value]) => user[key] === value)) || null;
  }

  /**
   * @param {string} username
   * @returns {User | null}
   */
  getUserByUsername(username) {
    return this.users.find(user => user.username === username) || null;
  }

  /**
   * @param {string} id
   * @returns {User | null}
   */
  getUserById(id) {
    return this.users.find(user => user.id === id) || null;
  }

  /**
   * @param {string} id
   * @returns {User | null}
   */
  getUserByFacebookId(facebookId) {
    return this.users.find(user => user.facebookId === facebookId) || null;
  }

  /**
   * @returns {string}
   */
  toJSONString() {
    return JSON.stringify({
      products: this.products,
      users: this.users,
    }, null, 2);
  }
}
