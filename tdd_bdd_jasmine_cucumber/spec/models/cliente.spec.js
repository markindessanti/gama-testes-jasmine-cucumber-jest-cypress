const Clientes = require('../../models/cliente');

var Reporter = {
	jasmineStarted: function (suiteInfo) {
		console.log('Executuando suíte com ' + suiteInfo.totalSpecsDefined + ' spec.\n');
	},

	suiteStarted: function (result) {
		console.log('Suíte de testes iniciada: ' + result.description
			+ ' cuja descrição completa é: ' + result.fullName + '\n');
	},

	specDone: function (result) {
		console.log('\nSpec: ' + result.description + ' - Resultado: ' + result.status);

		for (var i = 0; i < result.failedExpectations.length; i++) {
			console.log('Falha: ' + result.failedExpectations[i].message);
			console.log(result.failedExpectations[i].stack);
		}

		console.log('Testes bem sucedidos:', result.passedExpectations.length);
	},

	suiteDone: function (result) {
		console.log('Suíte: ' + result.description + ' - Resultado: ' + result.status);
		for (var i = 0; i < result.failedExpectations.length; i++) {
			console.log('Suíte ' + result.failedExpectations[i].message);
			console.log(result.failedExpectations[i].stack);
		}
	},

	jasmineDone: function (result) {
		console.log('Suíte finalizada: ' + result.overallStatus);
		for (var i = 0; i < result.failedExpectations.length; i++) {
			console.log('Global ' + result.failedExpectations[i].message);
			console.log(result.failedExpectations[i].stack);
		}
	}
};

jasmine.getEnv().addReporter(Reporter);

describe('Clientes', () => {
	beforeEach(async () => {

	});

	it('Retorna Quantidade de Clientes', async () => {
		let clientes = Clientes.todos();
		expect(clientes.length).toEqual(10);
	});

	it('Retorna Dados do Cliente', async () => {
		let cliente = Clientes.primeiro();
		expect(cliente.id).not.toBeUndefined();
		expect(cliente.nome).not.toBeUndefined();
		expect(cliente.telefone).not.toBeUndefined();
	});

	it('Verifica se nome está em UpperCase', async () => {
		let cliente = Clientes.primeiro();
		const nomeUpperCase = 'MARKIN DESSANTI';
		expect(cliente.nomeUpperCase()).toEqual(nomeUpperCase);
	});
})