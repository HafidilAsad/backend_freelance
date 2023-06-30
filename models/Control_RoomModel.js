import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Control_Room = db.define('control_room',{
    pv: DataTypes.DOUBLE,
    sv: DataTypes.DOUBLE,
    status: DataTypes.STRING
},{
    freezeTableName:true
});
 
export default Control_Room;
 
(async()=>{
    await db.sync();
})();