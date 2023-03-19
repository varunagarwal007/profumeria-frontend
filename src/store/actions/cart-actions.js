import { API } from "../../backend";
import { cartActions } from "../reducers/cart-slice";
import { isAuthenticated } from "./auth-action";

export const sendCartData = (data) => {
	const { token, user } = isAuthenticated();

	return async (dispatch) => {
		fetch(`${API}/api/user/${user._id}/cart`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				return response.json();
			})
			.then((datares) => {
				if (!datares.ok) {
					return;
				}
				console.log(datares);
			})
			.catch((error) => console.log(error));
	};
};

export const fetchCartData = () => {
	const { token, user } = isAuthenticated();

	return async (dispatch) => {
		// dispatch(uiActions.setisLoadding(true));

		const fetchData = async () => {
			const response = await fetch(`${API}/api/user/${user._id}`, {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});
			if (!response.ok) {
				throw new Error("could not fetch cart data");
			}
			const data = await response.json();

			return data.cart;
		};

		try {
			const cartData = await fetchData();
			// console.log(cartData);
			dispatch(cartActions.replaceCart(cartData));
			// dispatch(uiActions.setisLoadding(false));
		} catch (err) {
			console.log(err);
		}
	};
};
