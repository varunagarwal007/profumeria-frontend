import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: "ui",
	initialState: {
		isLoadding: false,
	},
	reducers: {
		setisLoadding(state, action) {
			state.isLoadding = action.payload;
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
