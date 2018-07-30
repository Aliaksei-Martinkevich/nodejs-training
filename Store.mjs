import MongooseStorage from './storage/MongooseStorage';

import User from './database/mongo/models/User';
import Product from './database/mongo/models/Product';


const DatabaseStorageSingleton = new MongooseStorage({
  users: User,
  products: Product,
});

export default { storage: DatabaseStorageSingleton };
