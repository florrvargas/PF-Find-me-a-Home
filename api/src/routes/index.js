const {Router} = require('express');
const mascotas = require('./mascotas');
const productos = require('./productos');
const getMascotasById = require('./getMascotaById.js');
const getProductosById = require('./getProductosById')
const getAllProducts = require("./productos");
const router = Router();

// Configurar los routers

router.use('/mascotas', mascotas);
router.use('/mascotas/', getMascotasById);
router.use("/productos", getAllProducts);
router.use('/productos', getAllProducts);
router.use('/productos', getProductosById);
router.use('/productos', productos);

module.exports = router;
