import express from 'express';

import productsRoutes from './productsRoutes';
import usersRoutes from './usersRoutes';
import authRoutes from './authRoutes';
import { authMiddleware } from '../middlewares';


const apiRoutes = express.Router();

apiRoutes.use('/products', authMiddleware, productsRoutes);
apiRoutes.use('/users', authMiddleware, usersRoutes);
apiRoutes.use('/auth', authRoutes);

export default apiRoutes;
