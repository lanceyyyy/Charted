const Order = require("../models/order");
const OrderItem = require("../models/order-item");
const CartItem = require("../models/cart-item");
const Product = require("../models/product");

exports.list = (req, res, next) => {
  Order.find()
    .populate("customer order_items")
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.detail = (req, res, next) => {
  Order.findById(req.params.id)
    .populate({ path: "order_items", populate: "product" })
    .populate("customer")
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.list_customer = (req, res, next) => {
  Order.find({ customer: req.params.customer_id })
    .sort({ createdAt: -1 })
    .populate({ path: "order_items", populate: "product" })
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.checkout = (req, res, next) => {
  const order = ({ customer, order_items, total_price, total_quantity } =
    req.body);

  const new_order = new Order(order);

  new_order
    .save()
    .then(async (result) => {
      let order_items_result = await OrderItem.insertMany(order_items);

      console.log(
        `${order_items_result.length} checkout items documents were inserted`
      );

      let cart_delete_result = await CartItem.deleteMany({
        customer: req.body.customer,
      });

      console.log(`Deleted ${cart_delete_result.deletedCount} documents`);

      res.json(result);
    })
    .catch((err) => next(err));
};

exports.status_change = (req, res, next) => {
  Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  )
    .populate("order_items")
    .then((result) => {
      if (req.body.status === "Delivered") {
        // update the stocks and num_sold of the product
        result.order_items.forEach((item) => {
          Product.findByIdAndUpdate(
            item.product,
            {
              $inc: {
                stocks: -item.quantity,
              },
            },
            { new: true }
          ).then((result) =>
            console.log(
              `Product ${result.name} stock and num_sold updated`
            )
          );
        });
      }
      res.json(result);
    })
    .catch((err) => next(err));
};
