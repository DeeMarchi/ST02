const cardapioModel = require("../model/cardapio");

const cardapioController = {
	index: (req, res) => {
		res.send(cardapioModel.listarCardapio(cardapioModel.cardapio));
	},

	buscar: (req, res) => {
		const nome = req.params.nome
		if (!nome) {
			return res.send("<p>Por favor infome algum produto que deseje procurar</p>");
		}
		
		const itensPorCategoria = cardapioModel.buscarPorCategoria(nome);
		if (itensPorCategoria.length > 0) {
			res.send(cardapioModel.listarCardapio(itensPorCategoria));
		} else {
			res.send(`<p>Não achamos o cardapio</p>`);
		}
	},

	adicionar: (req, res) => {
		// URL de teste: localhost:3000/adicionar/{"nome": "X-Bacon", "preco": 30, "categoria": "Carne"}
		const produto = req.params.produto;
		if (!produto) {
			return res.send("<p>Por favor informe algum produto que deseje adicionar</p>");
		}
		let produtoJSON = null;

		try {
			produtoJSON = JSON.parse(produto);
		} catch (err) {
			console.log("Formato invalido passado na URL");
		}

		if (produtoJSON) {
			if (cardapioModel.buscarItemPorNome(produtoJSON.nome).length > 0) {
				return res.send(`<p>Parece que já temos o item ${produtoJSON.nome} em nosso cardapio</p>`);
			}
			cardapioModel.adicionarItem(produtoJSON)
					? res.send(`<p>O item '${produtoJSON.nome}' foi adicionado ao cardapio!</p>`)
					: res.send("<p>Algo deu errado verifique se o produto possui nome, preço e categoria</p>");
		} else {
			res.send("<p>Algo deu errado verifique se o formato do produto está em JSON</p>");
		}
	},
};

module.exports = cardapioController;
