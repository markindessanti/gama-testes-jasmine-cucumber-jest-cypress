/// <reference types="cypress" />

context('Markin Dessanti Testes', () => {
	beforeEach(() => {
		cy.on('uncaught:exception', (err) => {
			return false;
		});

		cy.visit('http://localhost:3000');
	})

	it('Ao acessar a Home, deve conter uma lista com 10 clientes', () => {
		cy.get('tbody tr')
			.should('to.have.length', 10);
	})

	it('Verificar se existe o cliente Markin Dessanti', () => {
		cy.get('tbody tr td')
			.contains('Markin Dessanti');
	})

	it('Verificar se existe o cliente Dorian Gray', () => {
		cy.get('tbody tr td')
			.contains('Dorian Gray');
	})

	it('Verificar se existe o cliente Luke Skywalker', () => {
		cy.get('tbody tr td')
			.contains('Luke Skywalker');
	})

	it('Verificar se o título contém o texto Markin Dessanti Testes', () => {
		cy.get('h1')
			.contains('Markin Dessanti Testes');
	})

	it('Verificar se existe o parágrafo Welcome', () => {
		cy.get('body p')
			.contains('Welcome');
	})
})