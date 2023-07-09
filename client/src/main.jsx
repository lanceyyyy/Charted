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
            element: <h1>Products List</h1>,
          },
          {
            path: "/products/:id",
            element: <h1>Products showcase</h1>,
          },
          {
            path: "/customize",
            element: <Customize />,
          },
          {
            path: "/sign-up",
            element: <h1>Products showcase</h1>,
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
                    element: <h1>Customer List</h1>,
                  },
                  {
                    path: ":id",
                    element: <h1>Customer Detail</h1>,
                  },
                ],
              },

              {
                path: "products",
                children: [
                  {
                    path: "list",
                    element: <h1>Products List</h1>,
                  },
                  {
                    path: ":id",
                    element: <h1>Product Detail</h1>,
                  },
                  {
                    path: ":id/update",
                    element: <h1>Product Update</h1>,
                  },
                  {
                    path: "create",
                    element: <h1>Product Create</h1>,
                  },
                ],
              },
              {
                path: "orders",
                children: [
                  {
                    index: true,
                    element: <h1>Orders List</h1>,
                  },
                  {
                    path: ":id",
                    element: <h1>Order</h1>,
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
