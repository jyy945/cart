var mongoose = require('mongoose');
var order = mongoose.model('Order');
var customer = mongoose.model('Customer');

exports.getOrder = function(req,res){
	var query = order.find({userid : 'jyy945'});
	query.exec(function(err,data){
		if(data){
			res.json(data)
		}
	})
};

exports.updateOrder = function(req,res){
	var temp = '';
	var query = customer.findOne({userid : 'jyy945'});
	query.exec(function(err,data){
		if(data){
			temp = data.cart;
			var uid = data.userid;
			var uship = data.shipping
			data.cart = [];
			data.save(function(err,data){
				if(temp.length != 0){
					var norder = new order({
						userid : uid,
						items : temp,
						shipping : uship
					});
					norder.save(function(err,result){
						res.send(result);
					});
				}else{
					res.send('no');
				}
			})
		}
	})
}