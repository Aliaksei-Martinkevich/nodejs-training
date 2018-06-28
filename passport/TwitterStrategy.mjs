import PassportTwitter from 'passport-twitter';

import Store from '../Store';


const TwitterStrategy = new PassportTwitter.Strategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: 'http://127.0.0.1:3000/api/auth/twitter/callback',
}, async (token, tokenSecret, profile, done) => {
  try {
    const user = await Store.storage.findOrCreateUser({
      twitterId: profile.id,
    }, {
      username: profile.displayName,
      email: profile.email,
    });

    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default TwitterStrategy;
