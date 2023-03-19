import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalItems: 0,
		checkoutPrice: 0,
		changed: false,
	},
	reducers: {
		replaceCart(state, action) {
			state.items = action.payload.items;
			state.totalItems = action.payload.totalItems;
			state.checkoutPrice = action.payload.checkoutPrice;
		},
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item._id === newItem._id);
			state.totalItems++;
			state.changed = true;
			if (!existingItem) {
				state.items.push({
					_id: newItem._id,
					name: newItem.name,
					price: newItem.price,
					totalPrice: newItem.price,
					quantity: 1,
				});
				if (state.items.length === 0) {
					state.checkoutPrice = newItem.price;
				} else {
					let total = [];
					for (let i = 0; i < state.items.length; i++) {
						total.push(state.items[i].totalPrice);
					}
					state.checkoutPrice = total.reduce(function (acc, val) {
						return acc + val;
					}, 0);
				}
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
				let total = [];
				for (let i = 0; i < state.items.length; i++) {
					total.push(state.items[i].totalPrice);
				}
				state.checkoutPrice = total.reduce(function (acc, val) {
					return acc + val;
				}, 0);
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item._id === id);
			state.totalItems--;
			state.changed = true;

			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item._id !== id);
				let total = [];
				for (let i = 0; i < state.items.length; i++) {
					total.push(state.items[i].totalPrice);
				}
				state.checkoutPrice = total.reduce(function (acc, val) {
					return acc + val;
				}, 0);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
				let total = [];
				for (let i = 0; i < state.items.length; i++) {
					total.push(state.items[i].totalPrice);
				}
				state.checkoutPrice = total.reduce(function (acc, val) {
					return acc + val;
				}, 0);
			}
		},
		setTotalItems(state) {
			state.totalItems = 0;
		},
	},
});
export const cartActions = cartSlice.actions;
export default cartSlice;
