const cardapio = [
	{
		nome: "X-Burger",
		preco: 10,
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

const listarCardapio = () => {
	let lista = "";
	for (let item of cardapio) {
		lista += `
		<p>Item: ${item.nome}</p>
		<p>Preço: ${item.preco}</p>
		<p>Categoria: ${item.categoria}</p>`;
	}
	return lista;
};

const buscarCardapio = nome => {
	const busca = cardapio.filter((cardapio) => {
		return cardapio.nome == nome;
	});
	return busca;
};

const adicionarItem = (nomeProduto, precoProduto, categoriaProduto) => {
	if (nomeProduto && precoProduto && categoriaProduto) {
		return cardapio.push({
			nome: nomeProduto,
			preco: precoProduto,
			categoria: categoriaProduto,
		});
	} else {
		return false;
	}
};

module.exports = {
	listarCardapio,
	buscarCardapio,
	adicionarItem,
};
