
import Store from '../Store';


export default class LocalStrategyHandler {
  constructor(authService) {
    this.authService = authService;
  }

  async handle(username, password, done) {
    const user = await Store.storage.getUserByUsername(username);
    if (user && await this.authService.constructor.checkPassword(user, password)) {
      done(null, user);
    } else {
      done(new Error('User not found'));
    }
  }
}
