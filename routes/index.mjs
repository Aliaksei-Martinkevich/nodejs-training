import express from 'express';

import apiRouter from './apiRoutes';


const rootRouter = express.Router();
rootRouter.use('/api', apiRouter);

rootRouter.get('/success', (req, res, next) => res.json('success'));
rootRouter.get('/fail', (req, res, next) => res.json('fail'));

export default rootRouter;
