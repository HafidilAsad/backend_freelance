// import sequelize
import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize("input_quality", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// export connection
export default db;
