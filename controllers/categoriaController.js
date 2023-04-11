import {request, response} from "express";
import {Categoria} from "../models/Categoria.js";

const crearCategoria = async (req = request, res = response) => {
    try {
        const categoria = await Categoria.create(req.body);
        return res.status(201).json(categoria);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export {
    crearCategoria,
}
