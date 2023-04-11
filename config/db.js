import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
dotenv.config({path: '.env'})

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD ?? '', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    // logging: false,
    define: {
        timestamps: true,
    },
    // en caso haya una conexión viva se siga utilizando (rendimiento)
    pool:  {
        min: 0, // mínimo de conexiones
        max: 5, // máximo de conexiones
        idle: 10000, // tiempo para liberar espacio
        acquire: 30000, // tiempo antes de marcar un error
    },
    operatorsAliases: false, // desactiva el uso de alias de operadores.
});
