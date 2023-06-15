const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
    username: String,
    first_name: String,
    last_name: String,

    barangay: String,
    municipality: String,
    city: String,
    postal: String,
    phone_number: String,

    email: String,
    password: String,

    wishlist: [
      {
        type: mongoose.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("customer", CustomerSchema);
