import { configureStore } from "@reduxjs/toolkit";
import AppetizerDataSlice from "./slice/AppetizerData.slice";
export default configureStore({
	reducer: {
		AppetizerData: AppetizerDataSlice,
	},
});
