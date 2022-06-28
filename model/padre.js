import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import bcrpty from 'bcrypt';
import { getUser } from "./Users.js";
import { gethijo } from "./hijo.js";

const padre = getData.sequelizeClient.define('cat_padre', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastNameF: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastNameM: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  
    

});

padre.hasMany(gethijo,{
    foreignKey: 'catPadreId'

});
gethijo.belongsTo(padre);

export const getpadre = padre;