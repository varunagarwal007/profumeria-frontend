import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./CartTotal.module.css";

const CartTotal = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<Fragment>
			<div className={classes.container}>
				Total:
				<span className={classes.price}>${cart.checkoutPrice}</span>
				<span style={{ fontSize: "2rem", margin: "2rem 0" }}>
					Total Items: {cart.totalItems}
				</span>
				<div className={classes.checkout}>
					<button className={classes.btn}>Checkout</button>
					<input
						className={classes.input}
						type="text"
						placeholder="Enter Coupon"
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default CartTotal;
