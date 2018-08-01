/**
 * @typedef {Object} Service
 * @prop {function} definition
 * @prop {string[]} dependencies
 * @prop {boolean} isSingleton
 */

export default class Container {
  constructor() {
    /**
     * @private
     * @type {Map<string, Service>}
     */
    this.services = new Map();
    /**
     * @property
     * @type {Map<string, *>}
     */
    this.singletons = new Map();
  }

  /**
   * @param {string} name
   * @param {function} definition
   * @param {Array<string>} [dependencies=[]]
   */
  registerService(name, definition, dependencies = []) {
    this.services.set(name, {
      definition,
      dependencies,
      isSingleton: false,
    });
  }

  /**
   * @param {string} name
   * @param {function} definition
   * @param {Array<string>} [dependencies=[]]
   */
  registerSingleton(name, definition, dependencies = []) {
    this.services.set(name, {
      definition,
      dependencies,
      isSingleton: true,
    });
  }

  /**
   * @param {string} name
   * @returns {*}
   */
  get(name) {
    const service = this.services.get(name);

    if (typeof service.definition !== 'function') {
      return service.definition;
    }

    if (!service.isSingleton) {
      return this.createInstance(service);
    }

    if (!this.singletons.has(name)) {
      this.singletons.set(name, this.createInstance(service));
    }

    return this.singletons.get(name);
  }

  /**
   * @param {Service} service
   * @returns {*}
   */
  createInstance(service) {
    return new service.definition(...this.resolveDependencies(service.dependencies));
  }

  /**
   * @private
   * @param {string[]} dependencies
   * @returns {Array<*>}
   */
  resolveDependencies(dependencies) {
    return dependencies.map(dependence => this.get(dependence));
  }
}
