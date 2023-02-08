import { createSlice } from "@reduxjs/toolkit";
import Card from "../../model/card.model";
const initialState = Card;

export const CardSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		addItems: (state, { payload }) => {
			state.push(payload);
		},
	},
});

export const { addItems } = CardSlice.actions;
export default CardSlice.reducer;
