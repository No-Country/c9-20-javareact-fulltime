import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3000";
export const FoodInfoApi = createApi({
	reducerPath: "food",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getInfoFood: builder.query({
			query: () => "/food",
		}),

		addNewPost: builder.mutation({
			query: (initialPost) => ({
				url: "commentsView.json",
				method: "POST",
				body: initialPost,
				headers: { "Content-Type": "application/json" },
			}),
		}),
	}),
});

export const { useGetInfoFoodQuery } = FoodInfoApi;
