import { getData } from './db.js';
import Sequelize from 'sequelize';

const User = getData.sequelizeClient.define('cat_users', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    name: Sequelize.STRING,
}, {

    tableName: 'cat_users',
    createdAt: false,
    updatedAt: false

});

export const getUser = User;

