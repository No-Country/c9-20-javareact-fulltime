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
			query: () => "/dishes",
		}),

		getDishesPizza: builder.query({
			query: () => "http://localhost:8080/api/dishes?categoryId=1&size=10",
		}),
		getDishesPastas: builder.query({
			query: () => "http://localhost:8080/api/dishes?categoryId=2&size=10",
		}),
		getDishesSaludable: builder.query({
			query: () => "http://localhost:8080/api/dishes?categoryId=3&size=10",
		}),

		getDishesCafeteria: builder.query({
			query: () => "http://localhost:8080/api/dishes?categoryId=4&size=10",
		}),

		getDishesPostres: builder.query({
			query: () => "http://localhost:8080/api/dishes?categoryId=5&size=10",
		}),

		getDishesChurrasqueria: builder.query({
			query: () => "http://localhost:8080/api/dishes?categoryId=6&size=10",
		}),

		getInfoFood: builder.query({
			query: () => "/dishes",
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
	useGetDishesPizzaQuery,
	useGetDishesPastasQuery,
	useGetDishesSaludableQuery,
	useGetDishesCafeteriaQuery,
	useGetDishesPostresQuery,
	useGetDishesChurrasqueriaQuery,
	useGetCategoriesQuery,
	useGetDishesQuery,
	useGetDishesTwoQuery,
	useGetInfoFoodQuery,
	useAddNewPostMutation,
	useGetCommentsQuery,
} = FoodInfoApi;
