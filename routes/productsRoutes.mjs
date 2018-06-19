import express from 'express';

import getAllProducts from '../controllers/api/products/getAllProducts';
import getProduct from '../controllers/api/products/getProduct';
import postProducts from '../controllers/api/products/postProducts';
import getProductReviews from '../controllers/api/products/getProductReviews';


const productsRoutes = express.Router();

productsRoutes.get('/', getAllProducts);
productsRoutes.get('/:id', getProduct);
productsRoutes.get('/:id/reviews', getProductReviews);
productsRoutes.post('/', postProducts);

export default productsRoutes;
