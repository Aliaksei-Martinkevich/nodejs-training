import mongoose from 'mongoose';
import hash from '../../../helpers/hash';

const schema = new mongoose.Schema({
  facebookId: {
    type: String,
    required: false,
    maxlength: 255,
  },
  twitterId: {
    type: String,
    required: false,
    maxlength: 255,
  },
  googleId: {
    type: String,
    required: false,
    maxlength: 255,
  },
  username: {
    type: String,
    required: true,
    maxlength: 255,
  },
  email: {
    type: String,
    required: false,
    maxlength: 255,
  },
  password: {
    type: String,
    maxlength: 255,
  },
});

schema.pre('save', async function callback(next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    this.password = await hash(this.password);
    next();
  } catch (error) {
    next(error);
  }
});


const User = mongoose.model('User', schema);

export default User;
