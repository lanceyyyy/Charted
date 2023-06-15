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
    email: req.body.email,
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
