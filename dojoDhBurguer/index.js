const cardapioRoute = require('./route/cardapio');
const pedidosRoute = require('./route/pedidos');

const express = require('express');
const app = express();

app.use(cardapioRoute);
app.use(pedidosRoute);

app.listen(3000, ()=> {
	console.log('teste');
});
