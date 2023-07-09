import { api } from "./api";

export const userApi = api.injectEndpoints({
	endpoints: (build) => ({
		getCustomers: build.query({
			query: () => `/customers`,
			providesTags: (result = [], error, arg) => [
				"Customer",
				...result.map(({ id }) => ({ type: "Customer", id })),
			],
		}),
		getCustomer: build.query({
			query: (id) => `/customer/${id}`,
			providesTags: (result, error, arg) => [
				{ type: "Customer", id: arg },
			],
		}),
		loginCustomer: build.mutation({
			query: (input) => ({
				url: "/customer/login",
				method: "POST",
				body: input,
			}),
			invalidatesTags: ["Customer", "Wishlist"],
		}),
		signUpCustomer: build.mutation({
			query: (data) => ({
				url: `/customer/sign-up`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Customer"],
		}),
		updateUser: build.mutation({
			query: ({ id, user }) => ({
				url: `/customer/${id}/update`,
				method: "POST",
				body: user,
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: "Customer", id: arg.id },
			],
		}),
	}),
});

export const {
	useGetCustomersQuery,
	useGetCustomerQuery,
	useLoginCustomerMutation,
	useSignUpCustomerMutation,
	useUpdateUserMutation,
} = userApi;
