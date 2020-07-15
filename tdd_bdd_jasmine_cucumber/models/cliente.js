module.exports = class Cliente {
	constructor() {
		this.id = 0;
		this.nome = "Markin Dessanti";
		this.telefone = "99955-4321";
	}

	static primeiro() { return new Cliente() }

	static todos() {
		return [
			new Cliente(),
			new Cliente(),
			new Cliente(),
			new Cliente(),
			new Cliente(),
			new Cliente(),
			new Cliente(),
			new Cliente(),
			new Cliente(),
			new Cliente()
		];
	}

	nomeUpperCase() { return this.nome.toUpperCase() }
}