import Sequelize from 'sequelize';

import connection from '../connection';

import hash from '../../../helpers/hash';


const User = connection.define('user', {
  id: {
    type: Sequelize.UUID(),
    defaultValue: Sequelize.UUIDV4(),
    primaryKey: true,
  },
  facebookId: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  twitterId: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  googleId: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },
  username: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: true,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

User.beforeCreate(async (user) => {
  if (user.password) {
    const result = user;
    const success = await hash(user.password);
    result.password = success;
  }
});

User.sync();

export default User;
