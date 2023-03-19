import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../../store/reducers/cart-slice";
import ImageHelper from "../../ProductsComponents/ImageHelper";
import classes from "./CartCard.module.css";

const CartCard = (props) => {
	const dispatch = useDispatch();
	const addItemHandler = (items) => {
		// console.log(items);
		dispatch(cartActions.addItemToCart(items));
	};

	const removeItemHandler = (data) => {
		dispatch(cartActions.removeItemFromCart(data));
	};
	return (
		<Fragment>
			<div className={classes.container}>
				<div className={classes["image-box"]}>
					<ImageHelper product={props.item} width={"8rem"} height={"12rem"} />
				</div>
				<div className={classes["details-box"]}>
					<div className={classes.details}>
						<div className={classes.text}>
							<Link to={`/user/products/${props.item._id}`}>
								<span className={classes.name}>{props.item.name} </span>
							</Link>
						</div>
						<div className={classes.actions}>
							<button
								className={classes.btn}
								onClick={() => addItemHandler(props.item)}>
								+
							</button>
							<span className={classes.quantity}>
								Qty: {props.item.quantity}
							</span>
							<button
								className={classes.btn}
								onClick={() => removeItemHandler(props.item._id)}>
								-
							</button>
							<span className={classes.price}>
								${props.item.price} x 1(For Each)
							</span>
						</div>
					</div>
					<div className={classes["total-price"]}>
						<span className={classes.total}>Total Price</span>
						<span className={classes.price}>${props.item.totalPrice}</span>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default CartCard;
