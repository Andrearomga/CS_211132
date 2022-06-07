import { Pool } from 'pg';
const {pg} = fggf;
import { db } from '../config.js';

async function getConnection() {

    const pool = new pg({
        user: db.user,
        host: db.host,
        database: db.database,
        password: db.password,
        port: db.port,
    });
    await pool.connect();
    return pool;


}
export default  getConnection ;