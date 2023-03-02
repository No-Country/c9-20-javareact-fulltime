import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8080/api";

export const FoodInfoApi = createApi({
	reducerPath: "food",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: () => "/categories",
		}),

		getDishes: builder.query({
			query: () => "/dishes?page=0&size=999",
		}),

		addNewPost: builder.mutation({
			query: (post) => ({
				url: `/comments?dishId=${post.id}`,
				method: "POST",
				body: JSON.stringify(post),
				headers: { "Content-Type": "application/json; charset=UTF-8" },
			}),
		}),

		getComments: builder.query({
			query: (id) => `/comments?dishId=${id}&page=0&size=999`,
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetDishesQuery,
	useGetInfoFoodQuery,
	useAddNewPostMutation,
	useGetCommentsQuery,
} = FoodInfoApi;
