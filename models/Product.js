// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database1.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Product = db.define('products', {
  // Define attributes
  nama_mesin: {
    type: DataTypes.STRING
  },
  gas_used: {
    type: DataTypes.DOUBLE
  },
  gas_consumption: {
    type: DataTypes.DOUBLE
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default Product;

(async()=>{
    await db.sync();
})();