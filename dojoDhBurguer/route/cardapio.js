const express = require('express');
const router = express.Router();

const cardapioController = require('../controller/cardapioController');

router.get('/', cardapioController.index);
router.get('/buscar/:nome?', cardapioController.buscar);
router.get('/adicionar/:produto?', cardapioController.adicionar);

module.exports = router;
