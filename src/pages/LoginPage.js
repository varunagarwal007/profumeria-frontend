import { useState, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { authActions } from "../store/reducers/auth-slice";
import { isAuthenticated, login } from "../store/actions/auth-action";

import classes from "./authPage.module.css";
import styles from "../Components/HomePageComponent/Banner.module.css";

const LoginPage = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const [values, setValues] = useState({
		email: "",
		password: "",
	});
	const handleChange = (email) => (event) => {
		event.preventDefault();
		// console.log(event.target.value);
		setValues({ ...values, [email]: event.target.value });
	};
	//Dispatching the user details to state of Redux
	dispatch(
		authActions.userDetails({
			email: values.email,
			password: values.password,
		})
	);

	//Submitting the user details to backend
	const onSubmitHandler = (event) => {
		event.preventDefault();
		dispatch(
			login(
				{
					email: values.email,
					password: values.password,
				},
				history
			)
		);
	};
	// This directs the user to respective page if the user is previously logged in
	useEffect(() => {
		if (isAuthenticated()) {
			const { user } = isAuthenticated();
			if (user.role === 1) {
				dispatch(authActions.setIsAdmin());
				history.replace("/admin/dashboard");
			} else {
				history.replace("/user/products");
			}
		}
	}, [dispatch, history]);

	return (
		<Fragment>
			<div className={classes.container}>
				<form onSubmit={onSubmitHandler}>
					<div className={classes.formcontainer}>
						<h1 className={classes.title}>Login Here !</h1>
						<label htmlFor="email" className={classes.lable}>
							Email
						</label>
						<input
							type="email"
							id="email"
							onChange={handleChange("email")}
							value={user.email}
							placeholder="example@mail.com"
						/>
						<label htmlFor="password" className={classes.lable}>
							Password
						</label>
						<input
							type="password"
							onChange={handleChange("password")}
							value={user.password}
							placeholder="Password"
						/>

						<NavLink className={classes.link} to="/signup">
							New Here ? Register Your Account
						</NavLink>
						<button className={styles.btn} onClick={onSubmitHandler}>
							Login
						</button>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default LoginPage;
