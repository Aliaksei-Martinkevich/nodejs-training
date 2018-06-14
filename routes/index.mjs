import express from 'express';

import apiRouter from './apiRoutes';


const rootRouter = express.Router();
rootRouter.use('/api', apiRouter);

export default rootRouter;
