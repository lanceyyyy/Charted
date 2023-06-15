const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    customer: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "customer",
    },
    order_items: [
      {
        type: mongoose.Types.ObjectId,
        ref: "order-item",
      },
    ],

    total_price: {
      type: mongoose.Types.Decimal128,
      get: getValue,
    },
    total_quantity: Number,

    status: { type: String, default: "To Process" },
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

module.exports = mongoose.model("order", OrderSchema);
