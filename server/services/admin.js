const Admin = require("../models/admin");

exports.list = (req, res, next) => {
	Admin.find()
		.then((result) => res.json(result))
		.catch((err) => next(err));
};

exports.detail = (req, res, next) => {
	Admin.findById(req.params.id)
		.then((result) => res.json(result))
		.catch((err) => next(err));
};

exports.login = async (req, res, next) => {
	let user = await Admin.findOne({
		email: req.body.email,
		password: req.body.password,
	});

	if (user === null) {
		return res.json({ error: "no user exists!" });
	}

	return res.json(user);
};

exports.signup = (req, res, next) => {
	const {
		username,
		name,

		email,
		password,
	} = req.body;

	const new_admin = new Admin({
		username,
		name,

		email,
		password,
	});

	new_admin
		.save()
		.then((result) => res.json(result))
		.catch((err) => next(err));
};

exports.update = (req, res, next) => {
	Admin.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((result) => res.json(result))
		.catch((err) => next(err));
};

exports.delete = (req, res, next) => {
	Admin.findByIdAndDelete(req.params.id)
		.then((result) => res.json(result))
		.catch((err) => next(err));
};
