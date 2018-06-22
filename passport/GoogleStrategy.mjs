import PassportGoogle from 'passport-google-oauth';

import Store from '../Store';


const GoogleStrategy = new PassportGoogle.OAuth2Strategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/api/auth/google/callback',
}, ((accessToken, refreshToken, profile, callback) => {
    const user = Store.storage.findOrCreateUser({
      googleId: profile.id,
      username: profile.displayName,
      email: profile.email,
    });

    callback(null, user);
  }));

export default GoogleStrategy;
