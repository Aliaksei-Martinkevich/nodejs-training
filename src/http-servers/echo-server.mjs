import http from 'http';
import config from '../../config/config.json';


const { host, port } = config;


http
  .createServer((request, response) => {
    response.statusCode = 200;
    request.pipe(response);
  })
  .listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
