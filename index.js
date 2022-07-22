const { app } = require('./app');
const { sequelize } = require('./database/db');


const PORT = process.env.PORT || 8080;
const main = async ( ) => {
  try {
    await sequelize.sync();
    app.listen(PORT);
    console.log(`Connection has been established successfully, port: ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();