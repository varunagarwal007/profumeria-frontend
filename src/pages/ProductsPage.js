import React, { Fragment } from "react";

import Product from "../Components/ProductsComponents/Products";

import classes from "./Products.module.css";

const ProductsPage = () => {
	return (
		<Fragment>
			<div className={classes.container}>
				<Product />
			</div>
		</Fragment>
	);
};

export default ProductsPage;
