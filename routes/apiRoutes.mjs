import express from 'express';

import getAllProducts from '../controllers/api/getAllProducts';
import getProduct from '../controllers/api/getProduct';
import postProducts from '../controllers/api/postProducts';
import getProductReviews from '../controllers/api/getProductReviews';
import getAllUsers from '../controllers/api/getAllUsers';


const apiRoutes = express.Router();

apiRoutes.get('/products', getAllProducts);
apiRoutes.get('/products/:id', getProduct);
apiRoutes.get('/products/:id/reviews', getProductReviews);
apiRoutes.post('/products', postProducts);
apiRoutes.get('/users', getAllUsers);

export default apiRoutes;
