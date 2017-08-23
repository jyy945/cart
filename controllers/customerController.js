var mongoose = require('mongoose');
var customer = mongoose.model('Customer');
var products = mongoose.model('Product');

exports.updateCart = function(req,res){
	var query = customer.findOne({userid : 'jyy945'});
	query.exec(function(err,data){
		data.cart.push(req.body.updateProduct);
		data.save(function(err,d){
			if(!err){
				res.send(d);
			}
		});
	});

};

exports.getCart = function(req,res){
	var query = customer.findOne({userid : 'jyy945'});
	query.exec(function(err,data){
		res.json(data);
	});
}

exports.removeProduct = function(req,res){
	var query = customer.findOne({userid : 'jyy945'});
	query.exec(function(err,data){
		if(data){
			var cart_products = data.cart;
			for(var i = 0; i < cart_products.length; i++){
				if(cart_products[i].product[0]._id == req.body.pid){
					cart_products.splice(i,1);
					data.save(function(){
						res.json(cart_products[i]);
					})
				}
			}
		}else{
			res.send('wrong');
		}
	})
};

exports.createOrder = function(req,res){
	
}