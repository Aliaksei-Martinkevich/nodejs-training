import DatabaseStorage from './storage/DatabaseStorage';

import User from './database/models/User';
import Product from './database/models/Product';


const DatabaseStorageSingleton = new DatabaseStorage({
  users: User,
  products: Product,
});

export default { storage: DatabaseStorageSingleton };
