import { createSlice } from "@reduxjs/toolkit";
import Trolley from "../../model/trolley.model";

const initialState = new Trolley();

export const AppetizerData = createSlice({
	name: "AppetizerData",
	initialState,
	reducers: {},
});

/* export const {} = initialState.actions; */
export default AppetizerData.reducer;
