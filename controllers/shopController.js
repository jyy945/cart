
var mongoose = require('mongoose');
var products = mongoose.model('Product');
exports.getProducts = function(req,res){
	products.find().exec(function(err,data){
		if(!data){
			res.json(404);
		}else{
			res.json(data);
		}
	});
}