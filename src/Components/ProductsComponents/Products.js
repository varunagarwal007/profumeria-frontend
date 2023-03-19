import { Fragment } from "react";
import { useSelector } from "react-redux";

import Spinner from "../UI/Spinner";

import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
	const ui = useSelector((state) => state.ui);
	return (
		<Fragment>
			{ui.isLoadding === true && <Spinner />}

			<ProductCard />
		</Fragment>
	);
};

export default Products;
