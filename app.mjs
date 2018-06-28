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

const app = express();

passport.use(LocalStrategy);
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
