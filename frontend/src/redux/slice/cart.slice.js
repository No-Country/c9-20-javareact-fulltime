import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	open: 0,
	items: [],
	total: 0,
};
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
			// const index = state.items.indexOf(payload);
			const filtered = state.items.filter((item) => item.id !== payload);

			return {
				...state,
				items: [...filtered],
			};
		},

		calculateTheTotal: (state) => {
			if (state.items.length === 0) {
				return {
					...state,
					total: 0,
				};
			}

			const totalPrice = state.items.reduce((acc, val) => {
				return acc + val.subTotal;
			}, 0);

			return {
				...state,
				total: totalPrice,
			};
		},
	},
});

export const { addItems, closetCart, openCart, calculateTheTotal, deleteItem } =
	CartSlice.actions;

export default CartSlice.reducer;
