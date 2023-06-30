import {Sequelize} from "sequelize";
 
const db = new Sequelize('cp1e','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;