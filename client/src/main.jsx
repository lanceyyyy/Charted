import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import theme from "./app/theme.js";
import store from "./app/store.js";

import { CssBaseline } from "@mui/material";

import App from "./App.jsx";

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
						path: "/products",
						element: <h1>Products List</h1>,
					},
					{
						path: "/products/:id",
						element: <h1>Products showcase</h1>,
					},
					{
						path: "/login",
						element: <h1>Products showcase</h1>,
					},
					{
						path: "/sign-up",
						element: <h1>Products showcase</h1>,
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
								element: <h1>Customer's Cart Items</h1>,
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
