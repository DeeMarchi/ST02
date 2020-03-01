const express = require('express');
const cardapioRoute = require('./route/cardapio');
const app = express();

app.use(cardapioRoute);

app.listen(3000, ()=> {
	console.log('teste')
});
