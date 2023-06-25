const CartItem = require("../models/cart-item");

exports.list = (req, res, next) => {
  CartItem.find()
    .populate("product")
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.detail = (req, res, next) => {
  CartItem.findById(req.params.id)
    .populate("product")
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.list_user = (req, res, next) => {
  CartItem.find({ customer: req.params.customer_id })
    .populate("product")
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.create = (req, res, next) => {
  const cart_item = ({
    customer,
    product,
    type,
    patrol_color,
    size,
    shape,
    tassel_size,
    patrol_light,
  } = req.body);

  if (req.body.quantity) {
    cart_item.quantity = req.body.quantity;
  }

  const new_cart_item = new CartItem(cart_item);

  new_cart_item
    .save()
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.update = (req, res, next) => {
  let cart_item = {};
  if (req.body.quantity) {
    cart_item.quantity = req.body.quantity;
  }
  if (req.file) {
    cart_item.image = req.file.filename;
  }

  CartItem.findByIdAndUpdate(req.params.id, cart_item, { new: true })
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.delete = (req, res, next) => {
  CartItem.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log("Delete Cart Item Successfully", result);
      res.json({
        message: "Delete Successfully",
        result,
      });
    })
    .catch((err) => next(err));
};
