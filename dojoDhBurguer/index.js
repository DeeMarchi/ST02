const express = require('express');
const route = require('./route/cardapio');
const app = express();

app.use(route);

app.listen(3000, ()=> {
	console.log('teste')
});
