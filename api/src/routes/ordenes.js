const { Router } = require("express");
const {
  traeTodasLasOrdenes,
  traeDetalleDeOrden,
  traeOrdenesDeUnUsuario,
  cambiaEstadoOrden,
  crearOrden,
} = require("./controllers");

const router = Router();

// Si se le pasa el estado de la orden por query devuelve eso
// Si no se le pasa nada devuelve todas
router.get("/", async (req, res) => {
  try {
    const ordenes = await traeTodasLasOrdenes();
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Trae una orden por ID
router.get("/:ordenId", async (req, res) => {
  const { ordenId } = req.params;
  try {
    const orden = await traeDetalleDeOrden(ordenId);
    res.status(200).json(orden);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// trae las ordenes de un usuario por ID
router.get("/ordenUsuario", async (req, res) => {
  const { userID } = req.query;
  try {
    const ordenesUsuario = await traeOrdenesDeUnUsuario(userID);
    res.status(200).json(ordenesUsuario);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// cambiar estado de una orden
router.put("", async (req, res) => {
  const { ordenId, estado } = req.body;
  try {
    const cambioOrden = await cambiaEstadoOrden(ordenId, estado);
    res.status(200).json(cambioOrden);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { userID, productos, montoTotal } = req.body;

  try {
    const ordenCreada = await crearOrden(userID, productos, montoTotal);
    res.status(200).send(ordenCreada);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
module.exports = router;
