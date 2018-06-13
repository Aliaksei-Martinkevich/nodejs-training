import http from 'http';
import config from '../../config/config.json';

const { host, port } = config;

http
  .createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World\n');
  })
  .listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
