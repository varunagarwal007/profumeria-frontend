import { API } from "../../backend";
import { authActions } from "../reducers/auth-slice";
import { cartActions } from "../reducers/cart-slice";
import { uiActions } from "../reducers/ui-slice";
import { fetchCartData } from "./cart-actions";

export const signup = (user, history) => {
	return async (dispatch) => {
		dispatch(uiActions.setisLoadding(true));

		fetch(`${API}/api/signup`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((response) => {
				if (!response.ok) {
					return;
				}
				return response.json();
			})
			.then((data) => {
				history.replace("/login");
				dispatch(uiActions.setisLoadding(false));
			})
			.catch((err) => {
				// console.log(err);
				// console.log("error in signup function");
				dispatch(uiActions.setisLoadding(false));
			});
	};
};

export const login = (userData, history) => {
	return async (dispatch) => {
		dispatch(uiActions.setisLoadding(true));

		fetch(`${API}/api/signin`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		})
			.then((response) => {
				if (!response.ok) {
					return console.log(response);
				}
				return response.json();
			})
			.then((data) => {
				if (data === undefined) {
					return;
				}
				if (typeof window !== "undefined") {
					localStorage.setItem("jwt", JSON.stringify(data));
					dispatch(authActions.setisLoggedIn());
				}
			})
			.then(() => {
				isAuthenticated();
				const { user } = isAuthenticated();
				if (user.role === 1) {
					dispatch(authActions.setIsAdmin());
					dispatch(uiActions.setisLoadding(false));

					history.replace("/admin/dashboard");
				} else {
					dispatch(fetchCartData());

					history.replace("/user/products");
				}
			})
			.catch(() => {
				// console.log("there was an error in login function");
				dispatch(uiActions.setisLoadding(false));
			});
	};
};

export const isAuthenticated = () => {
	if (typeof window == "undefined") {
		return false;
	}
	if (!localStorage.getItem("jwt")) {
		return false;
	}
	if (localStorage.getItem("jwt")) {
		const token = localStorage.getItem("jwt");
		return JSON.parse(token);
	} else {
		return false;
	}
};

export const signout = (history) => {
	return async (dispatch) => {
		dispatch(uiActions.setisLoadding(true));

		if (typeof window !== "undefined") {
			const response = await fetch(`${API}/api/signout`, {
				method: "GET",
			});
			if (!response.ok) {
				return;
			}
			localStorage.removeItem("jwt");
			dispatch(authActions.setisLoggedIn());
			dispatch(cartActions.setTotalItems());
			history.replace("/login");
			dispatch(uiActions.setisLoadding(false));

			return console.log("signout success", response);
		}
	};
};
