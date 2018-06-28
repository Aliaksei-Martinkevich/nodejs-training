module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'nodejs',
    host: '127.0.0.1',
    port: '32770',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'nodejs',
    host: '127.0.0.1',
    port: '32770',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'nodejs',
    host: '127.0.0.1',
    port: '32770',
    dialect: 'postgres',
  },
};
