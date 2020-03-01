const express = require('express');
const router = express.Router();

const cardapioController = require('../controller/cardapioController');
const pedidosController = require("../controller/pedidos");

router.get('/', cardapioController.index);
router.get('/buscar/:nome', cardapioController.buscar);
router.get('/pedidos/:nome');

module.exports = router;
