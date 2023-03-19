/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductWithId } from "../../../store/actions/products-action";
import classes from "./ProductsDetailsComponent.module.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ImageHelper from "../ImageHelper";
import { cartActions } from "../../../store/reducers/cart-slice";

const ProductsDetailsComponent = (product) => {
	const productDetail = useSelector((state) => state.products.productDetails);

	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(getProductWithId(params));
	}, [dispatch]);

	const addToCartHandler = (data) => {
		dispatch(cartActions.addItemToCart(data));
	};

	return (
		<Fragment>
			<div style={{ maxWidth: "1100px", margin: "auto" }}>
				{productDetail && (
					<h1 className={classes.title}>
						Perfumes from {productDetail.category.name}
					</h1>
				)}
				{productDetail && (
					<div className={classes.container}>
						<div className={classes["image-box"]}>
							<ImageHelper product={productDetail} className={classes.image} />
						</div>
						<div className={classes.details}>
							{/* {console.log(productDetail)} */}
							<div className={classes["name-box"]}>
								<h1 className={classes.name}>{productDetail.name}</h1>
							</div>
							<div className={classes["price-box"]}>
								<h3 className={classes.price}>${productDetail.price}</h3>
								<h6 className={classes.tax}>*Including Taxes</h6>
							</div>
							<div className={classes["action-btn"]}>
								<button
									onClick={() => addToCartHandler(productDetail)}
									className={classes["cart-btn"]}>
									Add to cart
								</button>
								<button className={classes["buy-btn"]}>Buy Now</button>
							</div>

							<div className={classes["description-box"]}></div>

							<p className={classes.description}>{productDetail.description}</p>
						</div>
					</div>
				)}
				<section className={classes.section}>
					<Link to="/user/products" className={classes.back}>
						<ArrowBackIcon className={classes.arrow} />
						Back to Home page
					</Link>

					{/* <div className={classes["review-box"]}>
					<h1 className={classes.reviews}>CUSTOMER REVIEW</h1>
				</div> */}
				</section>
			</div>
		</Fragment>
	);
};

export default ProductsDetailsComponent;
