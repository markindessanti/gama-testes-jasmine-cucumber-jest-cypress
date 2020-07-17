const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver');
const pathDriver = "C:\\laragon\\www\\gama-testes\\tdd_bdd_jasmine_cucumber\\driver\\chromedriver.exe";
const serviceBuilder = new ServiceBuilder(pathDriver);

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();

Given('I\'m \{int} clients in my database', function (qtd) {
	console.log('Dados inseridos na base', qtd);
});

When('I access my homepage', async function () {
	await driver.get('http://localhost:3000/');
	// await driver.sleep(2000);
});

Then('See the list of \{int} itens', async function (qtd) {
	const linhas = await driver.findElements(By.css('tbody tr'));
	const totalClientes = linhas.length;
	console.log('totalDeLinhas :>> ', totalClientes);
	assert.equal(totalClientes, qtd);

	driver.quit();
});