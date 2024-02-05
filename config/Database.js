import { Sequelize } from "sequelize";

const db = new Sequelize("postgres", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

// const db = new Sequelize("express", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

export default db;
