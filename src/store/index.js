import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./reducers/auth-slice";
import productSlice from "./reducers/products-slice";
import uiSlice from "./reducers/ui-slice";
import cartSlice from "./reducers/cart-slice";

const store = configureStore({
	reducer: {
		user: authSlice.reducer,
		products: productSlice.reducer,
		ui: uiSlice.reducer,
		cart: cartSlice.reducer,
	},
});

export default store;
