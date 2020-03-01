const cardapioModel = require("../model/cardapio");

const cardapioController = {
	index: (req, res) => {
		res.send(cardapioModel.listarCardapio());
	},

	buscar: (req, res) => {
		let nome = req.params.nome
		let cardapio = cardapioModel.buscarCardapio(nome)
		if(cardapio.length > 0) {
			res.send(`${cardapio.length}`);
		} else {
			res.send(`<p>Não achamos o cardapio</p>`);
		}
	},

	adicionar: (req, res) => {
		const {nome, preco, categoria} = req.params;

		if (cardapioModel.adicionarItem(nome, preco, categoria)) {
			res.send(`<p>O item '${nome}' foi adicionado ao cardapio!</p>`);
		} else {
			res.send("<p>Algo deu errado verifique se o produto possui nome, preço e categoria</p>");
		}
	},
};

module.exports = cardapioController;
