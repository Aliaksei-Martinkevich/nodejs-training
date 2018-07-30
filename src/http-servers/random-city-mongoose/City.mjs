import mongoose from 'mongoose';

const City = mongoose.model('City', new mongoose.Schema({
  name: String,
  country: String,
  capital: Boolean,
  location: {
    lat: Number,
    long: Number,
  },
}));

export default City;
