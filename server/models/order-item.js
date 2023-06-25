const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderItemSchema = new Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: {
      type: mongoose.Types.Decimal128,
      get: getValue,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["customizable", "fixed"],
    },
    patrol_color: String,
    size: String,
    shape: String,
    tassel_size: String,
    patrol_light: String,
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

module.exports = mongoose.model("order-item", OrderItemSchema);
