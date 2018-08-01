import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';

import Store from './Store';
import rootRouter from './routes';
import { cookieParser } from './middlewares';

import LocalStrategy from './passport/LocalStrategy';
import FacebookStrategy from './passport/FacebookStrategy';
import TwitterStrategy from './passport/TwitterStrategy';
import GoogleStrategy from './passport/GoogleStrategy';

import Container from './IoCContainer/Container';

import AuthService from './services/AuthService';
import UsersService from './services/UsersService';
import LocalStrategyHandler from './passport/LocalStrategyHandler';

const container = new Container();
container.registerSingleton('auth', AuthService);
container.registerSingleton('users', UsersService);
container.registerSingleton('localStrategyHandler', LocalStrategyHandler);

const app = express();

app.set('container', container);

passport.use(LocalStrategy(container.get('localStrategyHandler')));
passport.use(FacebookStrategy);
passport.use(TwitterStrategy);
passport.use(GoogleStrategy);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => done(null, await Store.storage.getUserById(id)));

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
}));
app.use(passport.initialize({ userProperty: 'user' }));
app.use(passport.session());
app.use(bodyParser.json());
app.use(cookieParser);
app.use('/', rootRouter);

export default app;
