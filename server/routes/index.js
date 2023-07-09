var express = require("express");
var router = express.Router();
const multer = require("multer");

const admin_services = require("../services/admin");
const customer_services = require("../services/customer");
const product_services = require("../services/product");
const order_services = require("../services/order");
const cart_item_services = require("../services/cart-item");

const storage = (file_dest) =>
	multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, `./public/images/${file_dest}`);
		},
		filename: function (req, file, cb) {
			const uniqueSuffix =
				Date.now() + "-" + Math.round(Math.random() * 1e9);
			cb(
				null,
				uniqueSuffix +
					"-" +
					file.originalname.replace(/\s+/g, "-").toLowerCase()
			);
		},
	});

const upload_product = multer({
	storage: storage("products"),
});

// Admin Routes
router.post("/admin/sign-up", admin_services.signup);
router.patch("/admin/:id/update", admin_services.update);
router.delete("/admin/:id/delete", admin_services.delete);
router.get("/admin/:id", admin_services.detail);
router.get("/admins", admin_services.list);

// Customer Routes
router.post("/customer/sign-up", customer_services.signup);
router.patch("/customer/:id/update", customer_services.update);
router.delete("/customer/:id/delete", customer_services.delete);
router.post("/customer/login", customer_services.login);

router.get("/customer/:id/cart-items", cart_item_services.list_user);
router.get("/customer/:id/orders", order_services.list_customer);

router.get("/customer/:id", customer_services.detail);
router.get("/customers", customer_services.list);

// Product Routes
router.post(
	"/product/create",
	upload_product.single("image"),
	product_services.create
);
router.patch(
	"/product/:id/update",
	upload_product.single("image"),
	product_services.update
);
router.delete("/product/:id/delete", product_services.delete);
router.get("/product/:id", product_services.detail);
router.get("/products", product_services.list);

// Cart Items Routes
router.post("/cart-item/create", cart_item_services.create);
router.patch("/cart-item/:id/update", cart_item_services.update);
router.delete("/cart-item/:id/delete", cart_item_services.delete);
router.get("/cart-item/:id", cart_item_services.detail);
router.get("/cart-items", cart_item_services.list);

// Order Routes
router.post("/order/create", order_services.checkout);
router.patch("/order/:id/status-change", order_services.status_change);
// router.delete("/order/:id/delete", order_services.delete);
router.get("/order/:id", order_services.detail);
router.get("/orders", order_services.list);

/* GET home page. */
router.get("/", function (req, res, next) {
	console.log("haiz");
	return res.json({ message: "This is the index of Charted's server" });
});

module.exports = router;
