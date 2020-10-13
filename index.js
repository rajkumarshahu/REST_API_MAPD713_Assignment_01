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

server
	// Allow the use of POST
	.use(restify.fullResponse())

	// Maps req.body to req.params so there is no switching between them
    .use(restify.bodyParser());


// @desc       Get all products in the system
// @endpoint   http://127.0.0.1:3009/products
// @method     GET
server.get('/products', function (req, res, next) {
	// Find every entity within the given collection
	productsSave.find({}, function (error, products) {
		console.log(`Received GET request /products`);
		// Return all of the products in the system
		res.send({ count: products.length, products });
		console.log(`Get: ${++getCount}`);
	});
});