import {DataTypes} from "sequelize";
import {sequelize} from "../config/db.js";
import {Categoria} from "./Categoria.js";

export const Producto = sequelize.define('productos', {
    nombre: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false, // no vacío
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

Producto.belongsTo(Categoria);
Categoria.hasMany(Producto);
