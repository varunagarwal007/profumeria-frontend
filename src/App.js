/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Spinner from "./Components/UI/Spinner";
import AdminPage from "./pages/AdminPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Header from "./Components/HomePageComponent/Header/Header";
import Footer from "./Components/Footer/Footer";

import { AdminRoute, UserRoute } from "./Routes";
import { useDispatch, useSelector } from "react-redux";
import ProductsDetailsComponent from "./Components/ProductsComponents/ProductDetails/ProductsDetailsComponent";
import CartPage from "./pages/CartPage";
import { fetchCartData, sendCartData } from "./store/actions/cart-actions";
import { isAuthenticated } from "./store/actions/auth-action";
let isInitial = true;

const AllRoutes = () => {
	const ui = useSelector((state) => state.ui);
	const cart = useSelector((state) => state.cart);
	const { user } = isAuthenticated();
	const dispatch = useDispatch();
	useEffect(() => {
		if (user) {
			dispatch(fetchCartData());
		}
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (cart.changed && user) {
			dispatch(sendCartData(cart));
		}
	});

	return (
		<Fragment>
			{ui.isLoadding === true && <Spinner />}
			<Header />

			<Switch>
				<Route exact path="/" component={HomePage} />

				<Route exact path="/signup" component={SignupPage} />

				<Route exact path="/login" component={LoginPage} />

				<UserRoute
					exact
					path="/user/products/:productId"
					component={ProductsDetailsComponent}
				/>
				<UserRoute exact path="/user/products">
					<ProductPage />
				</UserRoute>

				<UserRoute path="/user/cart" component={CartPage} />
				<UserRoute exact path="/contacts" component={ContactPage} />
				<AdminRoute path="/user/dashboard" component={AdminPage} />

				<Route exact path="*">
					<HomePage />
				</Route>
			</Switch>
			{/* <Footer /> */}
		</Fragment>
	);
};

export default AllRoutes;
