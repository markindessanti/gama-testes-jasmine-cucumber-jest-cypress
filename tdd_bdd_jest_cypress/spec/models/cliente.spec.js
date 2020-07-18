const Clientes = require('../../models/cliente');

describe('Clientes', () => {
	beforeEach(async () => {

	});

	test('Retorna Quantidade de Clientes', async () => {
		let clientes = Clientes.todos();
		expect(clientes.length).toEqual(10);
	});

	test('Retorna Dados do Cliente', async () => {
		let cliente = Clientes.primeiro();
		expect(cliente.id).not.toBeUndefined();
		expect(cliente.nome).not.toBeUndefined();
		expect(cliente.telefone).not.toBeUndefined();
	});

	test('Verifica se nome está em UpperCase', async () => {
		let cliente = Clientes.primeiro();
		const nomeUpperCase = cliente.nome.toUpperCase();
		expect(cliente.nomeUpperCase()).toEqual(nomeUpperCase);
	});

	test('Verifica se nome do cliente está preenchido', async () => {
		let cliente = Clientes.primeiro();
		expect(cliente.nome.length > 0).toEqual(true);
	});

	test('Nome testado com indexOf', async () => {
		let cliente = Clientes.primeiro();
		expect(cliente.nome.indexOf('a') != -1).toEqual(true);
	});
})