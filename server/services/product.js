const Product = require("../models/product");

exports.list = (req, res, next) => {
	Product.find()
		.then((result) => res.json(result))
		.catch((err) => next(err));
};

exports.detail = (req, res, next) => {
	Product.findById(req.params.id)
		.then((result) => res.json(result))
		.catch((err) => next(err));
};

exports.create = (req, res, next) => {
	const { name, description, price, availability, stocks } = req.body;

	const new_product = new Product({
		name,
		description,
		image: req.file.filename,
		availability,
		stocks,
		price,
	});

	new_product
		.save()
		.then((result) => res.json(result))
		.catch((err) => next(err));
};

exports.update = (req, res, next) => {
	const product = ({ name, description, price, availability, stocks } =
		req.body);

	if (req.file) {
		product.image = req.file.filename;
	}
	Product.findByIdAndUpdate(req.params.id, product, { new: true })
		.then((result) => res.json(result))
		.catch((err) => next(err));
};

exports.delete = (req, res, next) => {
	Product.findByIdAndDelete(req.params.id)
		.then((result) => res.json(result))
		.catch((err) => next(err));
};
