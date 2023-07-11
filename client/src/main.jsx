import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import "./styles.css";

import theme from "./app/theme.js";
import store from "./app/store.js";

import { CssBaseline } from "@mui/material";

import Root from "./routes/Root.jsx";
import Error from "./routes/Error.jsx";
import Home from "./routes/client/Home.jsx";

// Admin
import Dashboard from "./routes/admin/Dashboard.jsx";
import CustomersList from "./routes/admin/customers/CustomerList.jsx";
import ProductsList from "./routes/admin/products/ProductsList.jsx";
import OrdersList from "./routes/admin/orders/OrdersList.jsx";
import CustomersDetail from "./routes/admin/customers/CustomerDetail.jsx";
import ProductCreate from "./routes/admin/products/ProductCreate.jsx";
import ProductsDetail from "./routes/admin/products/ProductDetail.jsx";
import ProductUpdate from "./routes/admin/products/ProductUpdate.jsx";
import OrdersDetail from "./routes/admin/orders/OrdersDetail.jsx";
import Login from "./routes/client/Login.jsx";
import Customize from "./routes/client/Customize";
import ContactUs from "./routes/client/ContactUs";
import Signup from "./routes/client/Signup";
import Products from "./routes/client/Products";
import Product from "./routes/client/Product";
import CartItems from "./routes/client/CartItems";
import OrderHistory from "./routes/client/OrderHistory";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				errorElement: <Error />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: "/contact",
						element: <ContactUs />,
					},
					{
						path: "/products",
						element: <Products />,
					},
					{
						path: "/products/:id",
						element: <Product />,
					},
					{
						path: "/customize",
						element: <Customize />,
					},
					{
						path: "/sign-up",
						element: <Signup />,
					},
					{
						path: "/login",
						element: <Login />,
					},
					{
						path: "/customers",
						children: [
							{
								index: true,
								element: <h1>Customer's Profile</h1>,
							},
							// /customers/cart-items
							{
								path: "cart-items",
								element: <CartItems />,
							},
							{
								path: "order-history",
								element: <OrderHistory />,
							},
						],
					},
					{
						path: "/admin",
						children: [
							{
								index: true,
								element: <Dashboard />,
							},
							{
								path: "customers",
								children: [
									{
										path: "list",
										element: <CustomersList />,
									},
									{
										path: ":id",
										element: <CustomersDetail />,
									},
								],
							},

							{
								path: "products",
								children: [
									{
										path: "list",
										element: <ProductsList />,
									},
									{
										path: ":id",
										element: <ProductsDetail />,
									},
									{
										path: ":id/update",
										element: <ProductUpdate />,
									},
									{
										path: "create",
										element: <ProductCreate />,
									},
								],
							},
							{
								path: "orders",
								children: [
									{
										index: true,
										element: <OrdersList />,
									},
									{
										path: ":id",
										element: <OrdersDetail />,
									},
								],
							},
						],
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<CssBaseline />
				<SnackbarProvider />
				<RouterProvider router={router} />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);
