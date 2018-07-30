export default class MongooseStorage {
  constructor({
    users,
    products,
  }) {
    this.users = users;
    this.products = products;
  }

  /**
   * @returns {Array<Product>}
   */
  getProducts() {
    return this.products.find().exec();
  }

  /**
   * @param {string} id
   * @returns {Array<Product>}
   */
  getProductById(id) {
    return this.products.findById(id).exec();
  }

  /**
   * @param {Product} product
   * @returns {Array<Product>}
   */
  createProduct(product) {
    return this.products.create(product);
  }

  /**
   * @param {User} user
   */
  addUser(user) {
    return this.users.create(user);
  }

  /**
   * @returns {Array<User>}
   */
  getUsers() {
    return this.users.find().exec();
  }

  /**
   * @param {*} data
   * @returns {User}
   */
  async findOrCreateUser(data, defaults) {
    const user = await this.users.findOne(data).exec();

    if (user) {
      return user;
    }

    return this.users.create({ ...data, ...defaults });
  }

  /**
   * @param {string} username
   * @returns {User | null}
   */
  getUserByUsername(username) {
    return this.users.findOne({ username }).exec();
  }

  /**
   * @param {string} id
   * @returns {User | null}
   */
  getUserById(id) {
    return this.users.findById(id).exec();
  }

  /**
   * @param {string} id
   * @returns {User | null}
   */
  getUserByFacebookId(facebookId) {
    return this.users.findOne({ facebookId });
  }
}
