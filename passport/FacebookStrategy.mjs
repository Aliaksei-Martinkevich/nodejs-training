import Facebook from 'passport-facebook';

import Store from '../Store';


const FacebookStrategy = new Facebook.Strategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    profileFields: ['id', 'displayName', 'email'],
    callbackURL: 'http://localhost:3000/api/auth/facebook/callback',
  },
  ((accessToken, refreshToken, profile, callback) => {
    const user = Store.storage.findOrCreateUser({
      facebookId: profile.id,
      username: profile.displayName,
      email: profile.email,
    });

    callback(null, user);
  }),
);

export default FacebookStrategy;
