import express from 'express';
import { serve, setup } from 'swagger-ui-express';

import swaggerJSON from '../vendors/swagger.json';


const swagger = express.Router();

swagger.use('/', serve, setup(swaggerJSON));

export default swagger;
