import express from 'express';
import passport from 'passport';

import postAuth from '../controllers/api/auth/postAuth';


const authRoutes = express.Router();

authRoutes.get('/', postAuth);

authRoutes.post('/local', passport.authenticate('local'), postAuth);

authRoutes.get('/facebook', passport.authenticate('facebook'));
authRoutes.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/api/auth',
    failureRedirect: '/fail',
  }),
);

authRoutes.get('/twitter', passport.authenticate('twitter'));
authRoutes.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/api/auth',
  failureRedirect: '/fail',
}));

authRoutes.get('/google', passport.authenticate('google', {
  scope: 'https://www.googleapis.com/auth/plus.login',
}));
authRoutes.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/api/auth',
  failureRedirect: '/fail',
}));

export default authRoutes;
