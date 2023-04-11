import {request, response} from 'express';
import {Producto} from "../models/Producto.js";
import {Categoria} from "../models/Categoria.js";

const crearProducto = async (req = request, res = response) => {
    try {
        // Verificar si ya existe un producto con el mismo nombre
        const productoExistente = await Producto.findOne({ where: { nombre: req.body.nombre } });
        if (productoExistente) {
            return res.status(400).json({error: 'El producto ya existe'});
        }

        // Crear el producto con los datos
        const producto = await Producto.create(req.body);

        // Devolver el producto creado
        return res.status(201).json(producto);
    } catch (error) {
        // Devolver un error en caso de que algo haya fallado
        return res.status(500).json({error: error.message});
    }
};

const obtenerProductos = async (req, res = response) => {
    try {
        const productos = await Producto.findAll();
        return res.status(200).json(productos)
    } catch (error) {
        return res.status(400).json({mensaje: error.message});
    }
}

const obtenerProductoPorCategoria = async (req = request, res = response) => {
    const {categoria} = req.params;

    try {
        if (categoria.toLowerCase()) {
            const categoriaEncontrada = await Categoria.findOne({where: {nombre: categoria}});

            if (!categoriaEncontrada) {
                return res.status(404).json({mensaje: 'La categoría especificada no existe'});
            }

            const productos = await Producto.findAll({
                where: {categoriaId: categoriaEncontrada.id},
                include: Categoria
            });
            return res.json(productos);
        }
    } catch (error) {
        return res.status(400).json({mensaje: error.message});
    }
}

export {
    crearProducto,
    obtenerProductos,
    obtenerProductoPorCategoria,
}
