const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
	customer: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: "customer",
	},
	product: {
		type: mongoose.Types.ObjectId,
		ref: "product",
	},
	type: String,
	patrol_color: String,
	size: String,
	shape: String,
	tassel_size: String,
	patrol_light: String,
	price: {
		type: mongoose.Types.Decimal128,
		get: getValue,
	},
	quantity: { type: Number, default: 1 },
});

function getValue(value) {
	if (typeof value !== "undefined") {
		return parseFloat(value.toString());
	}
	return value;
}

module.exports = mongoose.model("cart-item", CartItemSchema);
