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
		Item: ${item.nome} <br>
		Preço: ${item.preco} <br>
		Categoria: ${item.categoria} <br>`;
	}
	return lista;
};

const buscarCardapio = nome => {
	const busca = cardapio.filter((cardapio) => {
		return cardapio.nome == nome;
	});
	return busca;
};

const adicionarItem = (nome, preco, categoria) => {
	if (nome && preco && categoria) {
		
	}
};

module.exports = {
	listarCardapio,
	buscarCardapio,
};