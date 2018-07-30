import mongoose from 'mongoose';

import app from './app';
import './Store';

const port = process.env.PORT || 8080;

mongoose
  .connect('mongodb://localhost:32768/nodejs')
  .then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  })
  .catch(console.error);
