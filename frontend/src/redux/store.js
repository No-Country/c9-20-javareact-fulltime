import { configureStore } from "@reduxjs/toolkit";
// import AppetizerDataSlice from "./slice/AppetizerData.slice";
// import CardSlice from "./slice/card.slice";
import { authQueries } from "./query/auth.query";
import authSlice from "./slice/Auth.slice";

export default configureStore({
	reducer: {
		// AppetizerData: AppetizerDataSlice,
		// card: CardSlice,
    [authQueries.reducerPath]: authQueries.reducer,
    auth: authSlice
	},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authQueries.middleware),
  devTools: true
});
