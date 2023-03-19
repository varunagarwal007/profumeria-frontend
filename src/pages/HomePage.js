import { Fragment } from "react";
import classes from "./Admin.module.css";
import Banner from "../Components/HomePageComponent/Banner";
import ProductsPage from "./ProductsPage";

const HomePage = () => {
	return (
		<Fragment>
			<div className={classes.container}>
				<Banner />
				<h1
					style={{
						fontSize: "4rem",
						fontFamily: "inherit",
						margin: "4rem 0 2rem 0",
						color: " hsl(207, 7%, 26%)",
					}}>
					MONTALE PARIS OFFICIAL DEALER
				</h1>
				<ProductsPage />
			</div>
		</Fragment>
	);
};
export default HomePage;
