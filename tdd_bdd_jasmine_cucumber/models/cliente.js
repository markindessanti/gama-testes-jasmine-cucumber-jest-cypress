module.exports = class Cliente {
	constructor(_id = 0, _nome = 'Não cadastrado', _telefone = 'Não cadastrado') {
		this.id = _id;
		this.nome = _nome;
		this.telefone = _telefone;
	}

	static primeiro() { return new Cliente() }

	static todos() {
		return [
			new Cliente(1, "Markin Dessanti", "98765-4321"),
			new Cliente(2, "José da Silva", "98765-4321"),
			new Cliente(3, "Jorge Amado", "98765-4321"),
			new Cliente(4, "Kirk Douglas", "98765-4321"),
			new Cliente(5, "Luke Skywalker", "98765-4321"),
			new Cliente(6, "Ronaldo Souza", "98765-4321"),
			new Cliente(7, "Ash", "98765-4321"),
			new Cliente(8, "Dorian Gray", "98765-4321"),
			new Cliente(9, "Ian Stevenson", "98765-4321"),
			new Cliente(10, "Vladmir Putin", "98765-4321")
		];
	}

	nomeUpperCase() { return this.nome.toUpperCase() }
}