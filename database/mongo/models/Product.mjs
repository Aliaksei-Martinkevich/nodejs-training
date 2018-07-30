import mongoose from 'mongoose';


const Product = mongoose.model('Product', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  reviews: {
    type: String,
    maxlength: 1024,
  },
}));


export default Product;
Product.findOne().exec()
