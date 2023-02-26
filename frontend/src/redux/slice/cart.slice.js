import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	open: 0,
	// Por prueba se inicia el state con 2 items, BORRAR luego de prueba.
	items: [
	// 	{
	// 	"id": 1,
	// 	"name": "Combo libra",
	// 	"description": "Hamburguesa, lechuga, tomate, cebolla morada, pepino, y cheddar + papas",
	// 	"price": 3500.0,
	// 	"image": {
	// 		"url": "https://res.cloudinary.com/doxahduh8/image/upload/v1676594926/Dise%C3%B1o_sin_t%C3%ADtulo_-_2023-02-15T183907_1_cbjj8f.png"
	// 	},
	// 	"category": {
	// 		"id": 6,
	// 		"imgUrl": "https://res.cloudinary.com/doxahduh8/image/upload/v1676594931/Dise%C3%B1o_sin_t%C3%ADtulo_88_1_btb96u.png",
	// 		"name": "Churrasqueria"
	// 	},
	// 	"_links": {
	// 		"self": {
	// 			"href": "http://localhost:8080/api/dishes/1"
	// 		},
	// 		"category": {
	// 			"href": "http://localhost:8080/api/categories/6"
	// 		}
	// 	}
	// },
	// {
	// 	"id": 2,
	// 	"name": "Tabla I",
	// 	"description": "Carne salteada, aceituna, salame, queso roquefort, queso caprese, salsa picante",
	// 	"price": 2500.0,
	// 	"image": {
	// 		"url": "https://res.cloudinary.com/doxahduh8/image/upload/v1676594925/Dise%C3%B1o_sin_t%C3%ADtulo_90_1_gatcrg.png"
	// 	},
	// 	"category": {
	// 		"id": 6,
	// 		"imgUrl": "https://res.cloudinary.com/doxahduh8/image/upload/v1676594931/Dise%C3%B1o_sin_t%C3%ADtulo_88_1_btb96u.png",
	// 		"name": "Churrasqueria"
	// 	},
	// 	"_links": {
	// 		"self": {
	// 			"href": "http://localhost:8080/api/dishes/2"
	// 		},
	// 		"category": {
	// 			"href": "http://localhost:8080/api/categories/6"
	// 		}
	// 	}
	// }
],
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
