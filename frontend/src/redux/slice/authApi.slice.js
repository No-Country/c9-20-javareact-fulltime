import { authQueries } from "../query/auth.query";

export const authApiSlice = authQueries.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: ({ email, password }) => ({
				url: "/login",
				method: "POST",
				body: { email, password },
			}),
		}),
		signup: builder.mutation({
			query: ({ name, email, password }) => ({
				url: "/register",
				method: "POST",
				body: { name, email, password, role: "ADMIN" },
			}),
		}),
	}),
});

export const { useLoginMutation, useSignupMutation } = authApiSlice;