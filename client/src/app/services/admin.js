import { api } from "./api";

export const adminApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAdmins: build.query({
			query: () => `/admins`,
			providesTags: (result = [], error, arg) => [
				"Admin",
				...result.map(({ id }) => ({ type: "Admin", id })),
			],
		}),
		getAdmin: build.query({
			query: (id) => `/admin/${id}`,
			providesTags: (result, error, arg) => [{ type: "Admin", id: arg }],
		}),
		loginAdmin: build.mutation({
			query: (input) => ({
				url: "/admin/login",
				method: "POST",
				body: input,
			}),
			invalidatesTags: ["Admin", "Wishlist"],
		}),
		signUpAdmin: build.mutation({
			query: (data) => ({
				url: `/admin/sign-up`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Admin"],
		}),
		updateAdmin: build.mutation({
			query: ({ id, user }) => ({
				url: `/admin/${id}/update`,
				method: "POST",
				body: user,
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: "Admin", id: arg.id },
			],
		}),
	}),
});

export const {
	useGetAdminsQuery,
	useGetAdminQuery,
	useLoginAdminMutation,
	useSignUpAdminMutation,
	useUpdateUserMutation,
} = adminApi;
