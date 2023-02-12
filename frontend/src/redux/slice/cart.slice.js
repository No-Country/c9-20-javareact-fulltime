import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../model/cart.model";
const initialState = new Cart(0, []);
export const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItems: (state, { payload }) => {
			return {
				...state,
				items: [...state.items, payload],
			};
		},

		openCart: (state) => {
			return {
				...state,
				open: true,
			};
		},
		closetCart: (state) => {
			return {
				...state,
				open: false,
			};
		},
		deleteItem: (state, { payload }) => {
			const index = state.items.indexOf(payload);
		},
	},
});

export const { addItems, closetCart, openCart, calculateTheTotal, deleteItem } =
	CartSlice.actions;

export default CartSlice.reducer;
