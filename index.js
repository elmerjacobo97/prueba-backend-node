import express from 'express';
import {sequelize} from "./config/db.js";
import {router} from "./routes/productoRoutes.js";

const app = express();

// Lectura y parseo del body
app.use(express.json());

// Conexión a la base de datos
try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Conexión correcta a BD');
} catch (error) {
    console.log(error);
}

// Rutas
app.use('/api', router);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})
