var shopping = require("./controllers/shopController.js");
var customer = require('./controllers/customerController.js');
var order = require('./controllers/orderController.js');

module.exports = function(app){
	app.get('/',function(req,res){
		res.render('shopping.html');
	});

	app.get('/product/get',shopping.getProducts);
	app.post('/cart/update',customer.updateCart);
	app.get('/cart/get',customer.getCart);
	app.post('/cart/remove',customer.removeProduct);
	app.post('/order/get',order.getOrder);
	app.post('/order/update',order.updateOrder);
}