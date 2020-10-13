var SERVER_NAME = 'product-api';
var PORT = 3009;
var HOST = 'localhost';
var getCount = 0;
var postCount = 0;

var restify = require('restify');
var colors = require('colors');

// Get a persistence engine for the products
productsSave = require('save')('products');
var products = [];

// Create the restify server
server = restify.createServer({ name: SERVER_NAME });

server.listen(PORT, HOST, function () {
	console.log(`Server ${server.name} listening at ${server.url}`.bold.yellow);
	console.log('Endpoints:'.bold.brightMagenta);
    console.log(`           ${server.url}/products`.brightMagenta);
    console.log(`           Method: GET, POST, DELETE`.brightBlue)
});