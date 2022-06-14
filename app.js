//funcionalidades de expres para levantar los proyectos
import express from 'express';
import { api } from './config.js';
import user from './api/components/user/network.js';

const app = express();

//routers
app.use('/api/user', user);
//servidor activo
app.listen(api.port, () => {
    console.log('server running on port :', api.port);
});