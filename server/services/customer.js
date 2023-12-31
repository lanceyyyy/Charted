const Customer = require("../models/customer");

exports.list = (req, res, next) => {
  Customer.find()
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.detail = (req, res, next) => {
  Customer.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.login = async (req, res, next) => {
  let user = await Customer.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!user) return res.json({ error: "no user exists!" });

  return res.json(user);
};

exports.signup = (req, res, next) => {
  const {
    username,
    first_name,
    last_name,

    barangay,
    municipality,
    city,
    postal,
    phone_number,

    email,
    password,
  } = req.body;
  console.log(req.body);
  const new_customer = new Customer({
    username,
    first_name,
    last_name,

    barangay,
    municipality,
    city,
    postal,
    phone_number,

    email,
    password,
  });

  new_customer
    .save()
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.update = (req, res, next) => {
  Customer.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.delete = (req, res, next) => {
  Customer.findByIdAndDelete(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.wishlist_customer = (req, res, next) => {
  Customer.findById(req.params.id)
    .then((result) => res.json(result.wishlist))
    .catch((err) => next(err));
};

exports.add_to_wishlist = (req, res, next) => {
  Customer.findByIdAndUpdate(
    req.body.customer,
    {
      $push: { wishlist: req.body.product },
    },
    { new: true }
  )
    .then((result) => res.json(result))
    .catch((err) => next(err));
};

exports.remove_to_wishlist = (req, res, next) => {
  Customer.findByIdAndUpdate(
    req.body.customer,
    {
      $pull: { wishlist: req.body.product },
    },
    { new: true }
  )
    .then((result) => res.json(result))
    .catch((err) => next(err));
};
