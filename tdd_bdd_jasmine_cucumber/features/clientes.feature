Feature: Clients
	Scenario: List of clients
		Given I'm 10 clients in my database
		When I access my homepage
		Then See the list of 10 itens