import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard/CartCard";
import CartTotal from "./CartTotal/CartTotal";
import classes from "./Cart.module.css";

const Cart = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<Fragment>
			{cart.items.length > 0 ? (
				<div className={classes.container}>
					{cart.items.length > 0 && (
						<div>
							{cart.items.map((item) => (
								<CartCard item={item} />
							))}
						</div>
					)}
					<CartTotal />
				</div>
			) : (
				<div className={classes.container}>
					<h1 style={{ fontSize: "6rem" }}>Add items to your Cart</h1>
				</div>
			)}
		</Fragment>
	);
};

export default Cart;
