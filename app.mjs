import config from './config/config.json';
import { Product, User } from './models';

console.log(`Application name: ${config.name}`);

// eslint-disable-next-line no-unused-vars
const user = new User();
// eslint-disable-next-line no-unused-vars
const product = new Product();
