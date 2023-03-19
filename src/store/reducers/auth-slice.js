import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "user",
	initialState: {
		firstname: "",
		email: "",
		password: "",
		isLoggedIn: false,
		isAdmin: false,
	},
	reducers: {
		userDetails(state, action) {
			state.firstname = action.payload.firstname;
			state.email = action.payload.email;
			state.password = action.payload.password;
		},
		setisLoggedIn(state) {
			state.isLoggedIn = !state.isLoggedIn;
		},
		setIsAdmin(state) {
			state.isAdmin = !state.isAdmin;
		},
	},
});

export const authActions = authSlice.actions;
export default authSlice;
