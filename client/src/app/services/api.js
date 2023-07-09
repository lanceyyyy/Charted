import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_base_url } from "../utils";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: api_base_url,
	}),
	tagTypes: ["Customer", "Product", "Cart Item", "Order", "Wishlist"],

	endpoints: () => ({}),
});
