import { configureStore } from "@reduxjs/toolkit";
import { FoodInfoApi } from "./query/FoodInfo.query";
import AppetizerDataSlice from "./slice/AppetizerData.slice";
import CartSlice from "./slice/cart.slice";
import { authQueries } from "./query/auth.query";
import authSlice from "./slice/Auth.slice";

export default configureStore({
	reducer: {
		AppetizerData: AppetizerDataSlice,
		cart: CartSlice,
		[FoodInfoApi.reducerPath]: FoodInfoApi.reducer,
    [authQueries.reducerPath]: authQueries.reducer,
    auth: authSlice
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			FoodInfoApi.middleware,
      authQueries.middleware
		),
});
