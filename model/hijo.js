import { getData } from "./db.js";
import { DataTypes } from "sequelize";


const hijo = getData.sequelizeClient.define('cat_hijo', {
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
    }
});

export const gethijo = hijo;