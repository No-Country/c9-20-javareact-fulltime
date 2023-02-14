import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3000";
export const FoodInfoApi = createApi({
	reducerPath: "food",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getInfoFood: builder.query({
			query: () => "/food",
		}),
	}),
});

export const { useGetInfoFoodQuery } = FoodInfoApi;
