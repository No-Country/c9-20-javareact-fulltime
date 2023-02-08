import { configureStore } from "@reduxjs/toolkit";
import AppetizerDataSlice from "./slice/AppetizerData.slice";
import CardSlice from "./slice/card.slice";

export default configureStore({
	reducer: {
		AppetizerData: AppetizerDataSlice,
		card: CardSlice,
	},
});
