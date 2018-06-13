import http from 'http';
import config from '../../config/config.json';

const { host, port } = config;

const product = {
  id: 1,
  name: 'Supreme T-Shirt',
  brand: 'Supreme',
  price: 99.99,
  options: [
    { color: 'blue' },
    { size: 'XL' },
  ],
};

http
  .createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(product));
  })
  .listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
