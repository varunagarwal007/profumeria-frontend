import { API } from "../../backend";
import { productActions } from "../reducers/products-slice";
import { uiActions } from "../reducers/ui-slice";

export const getProduct = () => {
	return async (dispatch) => {
		dispatch(uiActions.setisLoadding(true));

		const response = await fetch(`${API}/api/products`, { method: "GET" });
		if (!response.ok) {
			return console.log("Error in fetching the products data");
		}
		const product = await response.json();
		// console.log(product);
		dispatch(uiActions.setisLoadding(false));
		dispatch(productActions.setNewProduct({ product: product }));

		return product;
	};
};

export const getProductWithId = (data) => {
	return async (dispatch) => {
		dispatch(uiActions.setisLoadding(true));
		// console.log(data);
		const response = await fetch(`${API}/api/product/${data.productId}`);
		if (!response.ok) {
			return console.log("error in fetching the product details");
		}
		const productDetails = await response.json();
		// console.log(productDetails);
		dispatch(uiActions.setisLoadding(false));
		dispatch(productActions.setProductDetails(productDetails));
		return productDetails;
	};
};
