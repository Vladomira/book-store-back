import Sequelize from "sequelize";
import config from "./server/config/config.json";

const sequelize = new Sequelize(
   config.development.database,
   config.development.username,
   config.development.password,
   {
      host: config.development.host,
      dialect: config.development.dialect,
   }
);

module.exports = sequelize;
