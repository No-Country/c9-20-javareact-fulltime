import { configureStore } from "@reduxjs/toolkit";
import { FoodInfoApi } from "./query/FoodInfo.query";
import AppetizerDataSlice from "./slice/AppetizerData.slice";
import CardSlice from "./slice/card.slice";

export default configureStore({
	reducer: {
		AppetizerData: AppetizerDataSlice,
		card: CardSlice,
		[FoodInfoApi.reducerPath]: FoodInfoApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			FoodInfoApi.middleware,
		),
});
