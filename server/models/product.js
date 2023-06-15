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

module.exports = mongoose.model("product", ProductSchema);
