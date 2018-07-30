import http from 'http';
import mongodb from 'mongodb';

import config from '../../config/config.json';

const { host, port } = config;

const { MongoClient } = mongodb;


MongoClient.connect('mongodb://localhost:32768')
  .then(client => client.db('nodejs'))
  .then((db) => {
    http
      .createServer(async (request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        const [city] = await db.collection('cities').aggregate([{
          $sample: {
            size: 1,
          },
        }]).toArray();
        response.end(JSON.stringify(city));
      })
      .listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}/`);
      });
  })
  .catch(console.error);
