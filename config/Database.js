import { Sequelize } from "sequelize";

const db = new Sequelize("crud_fullstackexpress", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
