var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
	name : String,
	phone : String,
	province : String,
	city : String
},{_id : false});
mongoose.model('Address',AddressSchema);

var ProductSchema = new Schema({
	name : String,
	imagefile : String,
	stock : Number,
	description : String,
	price : Number
});
mongoose.model('Product',ProductSchema);

var ProductQuantitySchema = new Schema({
	number : String,
	product : [ProductSchema]
},{_id : false});
mongoose.model('ProductQuantity',ProductQuantitySchema);

var CustomerSchema = new Schema({
	userid : String,
	shipping : [AddressSchema],
	cart : [ProductQuantitySchema]
});
mongoose.model('Customer',CustomerSchema);

var OrderSchema = new Schema({
	userid : String,
	items : [ProductQuantitySchema],
	shipping : [AddressSchema],
	time : {type : Date,default : Date.now}
});
mongoose.model('Order',OrderSchema);