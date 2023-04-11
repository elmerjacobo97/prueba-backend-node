import {Router} from 'express';
import {crearProducto, obtenerProductoPorCategoria, obtenerProductos} from "../controllers/productoController.js";
import {crearCategoria} from "../controllers/categoriaController.js";
export const router = Router();

router.post('/categorias', crearCategoria);
router.post('/productos', crearProducto);

router.get('/productos', obtenerProductos);
router.get('/productos/:categoria', obtenerProductoPorCategoria);
