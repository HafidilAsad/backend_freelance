import { Sequelize } from "sequelize";
import db from "../config/database2.js";

const { DataTypes } = Sequelize;

const Quality = db.define(
  "db_quality",
  {
    proses: DataTypes.STRING,
    kategori: DataTypes.STRING,
    nama_part: DataTypes.STRING,
    quantity: DataTypes.STRING,
    shift: DataTypes.STRING,
    judge: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Quality;

(async () => {
  await db.sync();
})();
