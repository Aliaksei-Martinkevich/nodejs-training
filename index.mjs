import app from './app';
import './Store';
import sequelize from './database/connection';


const port = process.env.PORT || 8080;

sequelize.authenticate().then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`))
});
