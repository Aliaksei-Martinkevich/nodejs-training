import express from 'express';
import bodyParser from 'body-parser';

import rootRouter from './routes';
import { cookieParser } from './middlewares';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser);
app.use('/', rootRouter);

export default app;
