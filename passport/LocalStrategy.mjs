import PassportLocalStrategy from 'passport-local';

import Store from '../Store';
import AuthService from '../services/AuthService';


const LocalStrategy = new PassportLocalStrategy.Strategy({
  usernameField: 'username',
  passwordField: 'password',
}, async (username, password, done) => {
  const user = Store.storage.getUserByUsername(username);
  if (user && await AuthService.checkPassword(user, password)) {
    done(null, user);
  } else {
    done({
      code: 404,
      message: 'Not Found',
    });
  }
});

export default LocalStrategy;
