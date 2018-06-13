import http from 'http';
import through2 from 'through2';
import fs from 'fs';

import config from '../../config/config.json';


const { host, port } = config;

const insertMessage = (message) => {
  const buffer = [];

  return [
    (chunck, _, next) => {
      buffer.push(chunck);
      next();
    },
    (next) => {
      next(null, buffer.map(chunck => chunck.toString()).join().replace('{message}', message));
    },
  ];
};

http
  .createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(through2(...insertMessage('Hello world'))).pipe(response);
  })
  .listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
