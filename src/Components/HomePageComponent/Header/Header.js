import React, { Fragment, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { isAuthenticated, signout } from "../../../store/actions/auth-action";
import { authActions } from "../../../store/reducers/auth-slice";

import classes from "./Header.module.css";
import svg from "../../../utilities/user.svg";
import logo from "../../../utilities/logo-2.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Badge, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	badge: {
		fontSize: 10,
		"@media (max-width:380px)": {
			display: "none",
			fontSize: 0,
		},
	},
}));

const Header = () => {
	const userState = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const history = useHistory();
	const styles = useStyles();

	const signoutHandler = () => {
		dispatch(signout(history));
	};

	useEffect(() => {
		if (!isAuthenticated()) {
			return;
		} else {
			const { token } = isAuthenticated();
			if (token) {
				dispatch(authActions.setisLoggedIn());
			}
		}
	}, [dispatch]);

	return (
		<Fragment>
			<div className={classes.container}>
				<div className={classes.logo}>
					<NavLink to="/">
						<img className={classes["logo__box"]} src={logo} alt="logo" />
					</NavLink>
				</div>

				<div className={classes.links}>
					<ul>
						<li>
							<NavLink to="/" className={classes.link}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/user/products" className={classes.link}>
								Perfumes
							</NavLink>
						</li>
						<li>
							<NavLink to="/" className={classes.link}>
								Fragrances
								<KeyboardArrowDownIcon
									style={{ marginBottom: -2.7, marginLeft: 2 }}
								/>
							</NavLink>
						</li>

						<li>
							<NavLink className={classes.link} to="/user/products">
								Man
							</NavLink>
						</li>
						<li>
							<NavLink className={classes.link} to="/">
								Skin Care
								<KeyboardArrowDownIcon
									style={{ marginBottom: -2.7, marginLeft: 2 }}
								/>
							</NavLink>
						</li>
						<li>
							<NavLink className={classes.link} to="/user/products">
								Make Up
							</NavLink>
						</li>
						<li>
							<NavLink className={classes.link} to="/user/products">
								Environment
							</NavLink>
						</li>
						<li>
							<NavLink className={classes.link} to="/user/products">
								Gift Card
							</NavLink>
						</li>
						<li>
							<NavLink className={classes.link} to="/contactus">
								Contact Us
							</NavLink>
						</li>
					</ul>
				</div>
				<div className={classes.icons}>
					{userState.isLoggedIn ? (
						<button className={classes["signout-btn"]} onClick={signoutHandler}>
							signout
						</button>
					) : (
						<NavLink to="/login" className={classes.icon}>
							<img src={svg} alt="profile" className={classes.profile} />
						</NavLink>
					)}
					<NavLink to="/user/cart">
						<Badge
							badgeContent={cart.totalItems}
							showZero
							color="primary"
							classes={{ badge: styles.badge }}
							className={classes.badge}>
							<ShoppingCartOutlinedIcon
								className={classes.ShoppingCartOutlinedIcon}
								style={{ fill: "#55505c", strokeWidth: "2" }}
							/>
						</Badge>
					</NavLink>
				</div>
			</div>
		</Fragment>
	);
};

export default Header;
