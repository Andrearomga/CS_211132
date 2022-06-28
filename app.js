//funcionalidades de expres para levantar los proyectos
import express from 'express';
import { api } from './config/config.js';
import user from './router/user.js';
import imagenes from './router/imagenes.js';
import hijo from './router/hijos.js';
import padre from './router/padres.js';


const app = express();

//routers
app.use('/model/user', user);
app.use('/model/imagen', imagenes);
app.use('/model/hijo', hijo);
app.use('/model/padre', padre);


//servidor activo
app.listen(api.port, () => {
    console.log('server running on port :', api.port);
});