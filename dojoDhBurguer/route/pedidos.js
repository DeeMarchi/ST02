const express = require("express");
const router = express.Router();

const pedidosController = require("../controller/pedidosController");

router.get("/pedidos");

module.exports = router;