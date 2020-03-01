const utils = require("../utilitarios");

const cardapio = [
	{
		nome: "X-Burger",
		preco: 10,
		categoria: "Carne",
	},
	{
		nome: "X-Bacon",
		preco: 12,
		categoria: "Carne",
	},
	{
		nome: "Salada",
		preco: 8,
		categoria: "Vegano",
	},
	{
		nome: "Refrigerante",
		preco: 5,
		categoria: "Bebida",
	},
];

const listarCardapio = lista => {
	let conteudo = "";
	for (let item of lista) {
		conteudo += `
		<p>Item: ${item.nome}</p>
		<p>Preço: ${item.preco}</p>
		<p>Categoria: ${item.categoria}</p>`;
	}
	return conteudo;
};

const buscarPorCategoria = nomeCategoria => {
	const resultado = cardapio.filter(item => {
		return item.categoria.toLocaleUpperCase() === nomeCategoria.toLocaleUpperCase();
	});
	return resultado;
};

const adicionarItem = produto => {
	const propsParaValidar = ["nome", "preco", "categoria",];

	if (produto && utils.temProps(produto, propsParaValidar)) {
		return cardapio.push(produto);
	} else {
		return false;
	}
};

module.exports = {
	listarCardapio,
	buscarPorCategoria,
	adicionarItem,
	cardapio,
};
