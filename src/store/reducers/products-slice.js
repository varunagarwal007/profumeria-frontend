import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "products",
	initialState: {
		product: null,
		productDetails: null,
		loading: false,
	},
	reducers: {
		setProduct(state, action) {
			state.name = action.payload.name;
			state.description = action.payload.description;
			state.price = action.payload.price;
			state.stock = action.payload.stock;
			state.category = action.payload.category;
		},
		setNewProduct(state, action) {
			state.product = action.payload.product;
		},
		setProductDetails(state, action) {
			state.productDetails = action.payload;
		},
	},
});
export const productActions = productSlice.actions;
export default productSlice;
