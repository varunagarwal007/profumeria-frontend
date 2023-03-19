import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ImageHelper from "../ImageHelper";
import { getProduct } from "../../../store/actions/products-action";

import Rating from "@material-ui/lab/Rating";
import classes from "./ProductCard.module.css";
import { useHistory } from "react-router-dom";

const ProductCard = () => {
	const product = useSelector((state) => state.products.product);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(getProduct());
	}, [dispatch]);

	const productClickHandler = (data) => {
		history.push(`/user/products/${data._id}`);
	};

	return (
		<Fragment>
			<div className={classes.section}>
				{product &&
					product.map((product, index) => {
						return (
							<div
								key={index}
								className={classes.container}
								onClick={() => productClickHandler(product)}>
								<ImageHelper
									width={"24.5rem"}
									height={"41.4rem"}
									// width={"30rem"}
									// height={"28rem"}
									product={product}
								/>
								<div className={classes.info}>
									<span className={classes.name}>{product.name} </span>
									<span className={classes.category}>
										{product.category.name}
									</span>
									<span className={classes.category}>${product.price}</span>

									<span className={classes.name}>
										<Rating
											className={classes.rating}
											value={product.stars}
											readOnly
										/>
										{/* <Rating
											classes={{
												root: style.root,
											}}
											value={product.stars}
											readOnly
										/> */}
									</span>
									<span className={classes.name}>
										({product.review.length} reviews )
									</span>
									{/* <span className={classes.name}>
										({Math.floor(Math.random() * 10) + 3} reviews )
									</span> */}
								</div>
							</div>
						);
					})}
			</div>
		</Fragment>
	);
};

export default ProductCard;
