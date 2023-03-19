import React, { Fragment } from "react";
import Cart from "../Components/Cart/Cart";
import classes from "./Products.module.css";

const CartPage = () => {
	return (
		<Fragment>
			<div className={classes.container}>
				<Cart />
			</div>
		</Fragment>
	);
};

export default CartPage;
