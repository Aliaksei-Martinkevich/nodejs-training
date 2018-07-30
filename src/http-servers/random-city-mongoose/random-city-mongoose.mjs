import http from 'http';
import mongoose from 'mongoose';

import config from '../../../config/config.json';
import City from './City';

const { host, port } = config;

mongoose.connect('mongodb://localhost:32768/nodejs')
  .then(() => {
    http
      .createServer(async (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        const [city] = await City.aggregate([{ $sample: { size: 1 } }]);
        response.end(JSON.stringify(city));
      })
      .listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`);
      });
  })
  .catch(console.error);
