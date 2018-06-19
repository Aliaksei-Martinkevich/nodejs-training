import express from 'express';

import getAllUsers from '../controllers/api/users/getAllUsers';


const usersRoutes = express.Router();

usersRoutes.get('/', getAllUsers);

export default usersRoutes;
