import express from 'express';

import postAuth from '../controllers/api/auth/postAuth';


const authRoutes = express.Router();

authRoutes.post('/', postAuth);

export default authRoutes;
