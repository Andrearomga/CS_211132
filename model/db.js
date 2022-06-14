import pkg from 'pg';
import Sequelize from 'sequelize';
const { Pool } = pkg;
import { db } from '../config.js';

async function getConnection() {

    const pool = new Pool({
        user: db.user,
        host: db.host,
        database: db.database,
        password: db.password,
        port: db.port,
    });
    await pool.connect();
    return pool;


}


const sequelizeClient = new Sequelize(db.database, db.user, db.password, {
    dialectOptions:{
        ssl: {
            require: true,
            rejectUnauthorized:false
        }
    },
    host: db.host,
    dialect: 'postgres',
});

sequelizeClient.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch((er) => {
        console.log('No se conecto',er)
    });

export const getData = { getConnection, sequelizeClient };




