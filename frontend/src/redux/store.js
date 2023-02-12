import { configureStore } from "@reduxjs/toolkit";
import { FoodInfoApi } from "./query/FoodInfo.query";
import AppetizerDataSlice from "./slice/AppetizerData.slice";
import CartSlice from "./slice/cart.slice";

export default configureStore({
	reducer: {
		AppetizerData: AppetizerDataSlice,
		cart: CartSlice,
		[FoodInfoApi.reducerPath]: FoodInfoApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			FoodInfoApi.middleware,
		),
});
