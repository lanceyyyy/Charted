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
    required: true,
    ref: "product",
  },
  quantity: Number,
});

module.exports = mongoose.model("cart-item", CartItemSchema);
