const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
		name: String,
		description: String,
		image: String,
		price: {
			type: mongoose.Types.Decimal128,
			get: getValue,
		},

		size: String,
		shape: String,
		patrol_color: String,
		patrol_light: String,
		tassel_size: String,

		availability: Boolean,
		stocks: Number,
	},
	{
		timestamps: true,
		toJSON: {
			getters: true,
		},
	}
);
function getValue(value) {
	if (typeof value !== "undefined") {
		return parseFloat(value.toString());
	}
	return value;
}

ProductSchema.virtual("image_url").get(function () {
	return `/images/products/${this.image}`;
});

module.exports = mongoose.model("product", ProductSchema);
