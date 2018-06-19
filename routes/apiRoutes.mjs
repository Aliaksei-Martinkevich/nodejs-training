import express from 'express';

import productsRoutes from './productsRoutes';
import usersRoutes from './usersRoutes';


const apiRoutes = express.Router();

apiRoutes.use('/products', productsRoutes);
apiRoutes.use('/users', usersRoutes);

export default apiRoutes;
