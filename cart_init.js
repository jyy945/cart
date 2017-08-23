var mongoose = require('mongoose');
require('./models/cart_model.js');
var conn = mongoose.connect('mongodb://localhost/cart1');
var Address = mongoose.model('Address');
var Product = mongoose.model('Product');
var ProductQuantity = mongoose.model('ProductQuantity');
var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');

function productSave(name,imagefile,price,description){
	var product = new Product({
		name : name,
		imagefile : imagefile,
		price : price,
		description : description
	});
	product.save(function(){
		console.log('初始化成功');
	})
}
Product.remove(function(){
	Order.remove(function(){
		Customer.remove(function(){
			var address = new Address({
				name : '金玉盈',
				phone : 18234030399,
				province : '河北',
				city : '承德',
			});
			var customer = new Customer({
				userid : 'jyy945',
				shipping : [address],
				cart : []
			});
			customer.save(function(){
				productSave('vivo1','images/1.jpg',1000,'vivo 内存4G 双射');
				productSave('华为','images/2.jpg',2000,'华为P1 内存4G');
				productSave('苹果','images/3.jpg',3000,'苹果7 内存4G 双射');
				productSave('LG','images/4.jpg',4000,'LG 内存4G 双射');
				productSave('vivo2','images/5.jpg',5000,'vivo2 内存4G 双射');
			})
		})
	})
})