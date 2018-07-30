import Sequelize from 'sequelize';

import connection from '../connection';


const Product = connection.define('product', {
  id: {
    type: Sequelize.UUID(),
    defaultValue: Sequelize.UUIDV4(),
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  reviews: Sequelize.JSON(),
});

Product.sync();

export default Product;
