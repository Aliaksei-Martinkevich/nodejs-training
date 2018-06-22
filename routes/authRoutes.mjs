import express from 'express';
import passport from 'passport';

import postAuth from '../controllers/api/auth/postAuth';


const authRoutes = express.Router();

authRoutes.post('/', postAuth);

authRoutes.get('/facebook', passport.authenticate('facebook'));
authRoutes.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/fail',
  }),
);

authRoutes.get('/twitter', passport.authenticate('twitter'));
authRoutes.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/success',
  failureRedirect: '/fail',
}));

authRoutes.get('/google', passport.authenticate('google', {
  scope: 'https://www.googleapis.com/auth/plus.login',
}));
authRoutes.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/success',
  failureRedirect: '/fail',
}));

export default authRoutes;
