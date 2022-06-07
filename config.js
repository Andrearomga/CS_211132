//const { user, host, database, port } = require("pg/lib/defaults")
export const api = {
    port: process.env.API_PORT || 3000,
};
export const db = {
    user: 'postgres',
    host: 'localhost',
    database: 'CSDB',
    password: 'andrearoman',
    port: '5432'
};