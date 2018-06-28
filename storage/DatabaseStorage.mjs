export default class Storage {
  constructor({ users, products }) {
    this.users = users;
    this.products = products;
  }

  /**
   * @returns {Array<Product>}
   */
  getProducts() {
    return this.products.findAll();
  }

  /**
   * @param {string} id
   * @returns {Array<Product>}
   */
  getProductById(id) {
    return this.products.findById(id);
  }

  /**
   * @param {Product} product
   * @returns {Array<Product>}
   */
  createProduct(product) {
    console.log(product);
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
    return this.users.findAll();
  }

  /**
   * @param {*} data
   * @returns {User}
   */
  async findOrCreateUser(data, defaults) {
    const [user] = await this.users.findOrCreate({ where: data, defaults });

    return user;
  }

  /**
   * @param {string} username
   * @returns {User | null}
   */
  getUserByUsername(username) {
    return this.users.findOne({ where: { username } });
  }

  /**
   * @param {string} id
   * @returns {User | null}
   */
  getUserById(id) {
    return this.users.findById(id);
  }

  /**
   * @param {string} id
   * @returns {User | null}
   */
  getUserByFacebookId(facebookId) {
    return this.users.findOne({ where: { facebookId } });
  }
}
