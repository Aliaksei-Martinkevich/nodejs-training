import PassportLocalStrategy from 'passport-local';


const createLocalStrategy = handler => new PassportLocalStrategy.Strategy({
  usernameField: 'username',
  passwordField: 'password',
}, (...args) => handler.handle(...args));

export default createLocalStrategy;
