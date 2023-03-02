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

    getUserInfo: builder.query({
      query: (id) => `/users/${id}`,
    }),

    getAddressInfo: builder.query({
      query: (token) => ({
        url: `/addresses`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
    }),

    addNewDataUser: builder.mutation({
      query: (id, field) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: field,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYW5pY3MiLCJzdWIiOiJzZWJhc3RpYW4uZ29tejAyQGdtYWlsLmNvbSIsImV4cCI6MTY3Nzk4NDMwOCwiaWF0IjoxNjc3NzI1MTA4LCJzY29wZSI6IlJPTEVfTk9STUFMIn0.Ihb83R9x3jzELtkiszmePktEXMgJMDr52nonQ7NNN0b-gcEZZpXfepKS4liUIDLcljs3W8TFMKjHthOwQCVJ_6SAt1gV15Z4qYY3aMP2_S5G3uoUurkDdeRbcqZTy7SGPBojDurwzjaQ0M-GVRLb_RPzP4nWeSly8r2OYV-EeagM8xgg5O4j5bNUNcvkSc38Rea5Z5MRsa10sdxCl6yR9a1bKtYrI3iGWy8sW9tHwZHDmccqiCTPDgJxF5npaeJSBHCOdhEpQrGHcLbuPi8DM3n1Np4XYR4CPNsaCsOO_SUc2da2zQ9HOSPpi-PXIg43XcNz97jwyletsLWdQqCVdw`,
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetDishesQuery,
  useGetInfoFoodQuery,
  useAddNewPostMutation,
  useGetCommentsQuery,
  useGetUserInfoQuery,
  useGetAddressInfoQuery,
  useAddNewDataUserMutation,
} = FoodInfoApi;
