import {sequelize} from "../config/db.js";
import {DataTypes} from "sequelize";

export const Categoria = sequelize.define('categorias', {
    nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false, // no vacío
    },
})
