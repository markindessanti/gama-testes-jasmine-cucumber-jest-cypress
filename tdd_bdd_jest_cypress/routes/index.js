var express = require('express');
var router = express.Router();
const Cliente = require('../models/cliente');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Markin Dessanti Testes', clientes: Cliente.todos() });
});

module.exports = router;
