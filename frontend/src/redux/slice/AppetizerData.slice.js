import { createSlice } from "@reduxjs/toolkit";
import Trolley from "../../model/trolley.model";
const initialState = new Trolley();

export const AppetizerData = createSlice({
	name: "AppetizerData",
	initialState,
	reducers: {
		increment: (state) => {
			return {
				...initialState,
				amount: state.amount + 1,
			};
		},
		decrement: (state) => {
			if (state.amount <= 0) {
				return {
					...initialState,
					amount: 0,
				};
			}

			return {
				...initialState,
				amount: state.amount - 1,
			};
		},

		resetValue: (state) => {
			return {
				...initialState,
				amount: 0,
			};
		},

		getInformation: (state) => {
			return {
				...initialState,
			};
		},
	},
});

export const { increment, decrement, resetValue, getInformation } =
	AppetizerData.actions;
export default AppetizerData.reducer;
