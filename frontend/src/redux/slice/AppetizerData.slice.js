import { createSlice } from "@reduxjs/toolkit";
import Trolley from "../../model/trolley.model";
const initialState = new Trolley();

export const AppetizerData = createSlice({
	name: "AppetizerData",
	initialState,
	reducers: {
		increment: (state) => {
			state.amount += 1;
		},
		decrement: (state) => {
			if (state.amount <= 0) {
				state.amount = 0;
			}

			state.amount -= 1;
		},
		resetValue: (state) => {
			state.amount = 0;
		},

		getInformation: (state, { payload }) => {
			state = payload;
		},
	},
});

export const { increment, decrement, resetValue, getInformation } =
	AppetizerData.actions;
export default AppetizerData.reducer;
