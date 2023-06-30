import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Cost = db.define('cost',{
    biaya_normal: DataTypes.STRING,
    biaya_surcharge: DataTypes.STRING,
    // biaya_normalRp: DataTypes.STRING,
    // biaya_surchargeRp: DataTypes.STRING
    //gender: DataTypes.STRING
},{
    freezeTableName:true
});
 
export default Cost;
 
(async()=>{
    await db.sync();
})();