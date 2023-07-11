import { api } from "./api";

export const checkoutApi = api.injectEndpoints({
	endpoints: (build) => ({
		getOrders: build.query({
			query: () => `/orders`,
			providesTags: (result = [], error, arg) => [
				"Order",
				...result.map(({ id }) => ({ type: "Order", id })),
			],
		}),
		getOrder: build.query({
			query: (id) => `/order/${id}`,
			providesTags: (result, error, arg) => [{ type: "Order", id: arg }],
		}),
		getOrdersByUser: build.query({
			query: (id) => `/customer/${id}/orders`,
			providesTags: (result = [], error, arg) => [
				"Order",
				...result.map(({ id }) => ({ type: "Order", id })),
			],
		}),
		createOrder: build.mutation({
			query: (data) => ({
				url: `/order/create`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Cart Item", "Order"],
		}),
		changeStatusOrder: build.mutation({
			query: ({ id, data }) => ({
				url: `/order/${id}/status-change`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: "Order", id: arg.id },
			],
		}),
	}),
});

export const {
	useGetOrdersQuery,
	useGetOrderQuery,
	useGetOrdersByUserQuery,
	useCreateOrderMutation,
	useChangeStatusOrderMutation,
} = checkoutApi;
