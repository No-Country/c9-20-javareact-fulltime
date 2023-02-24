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
			query: (initialPost) => ({
				url: "/comments",
				method: "POST",
				body: initialPost,
				headers: { "Content-Type": "application/json; charset=UTF-8" },
			}),
		}),

		getComments: builder.query({
			query: () => "/comments",
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
