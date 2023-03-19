import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { authActions } from "../store/reducers/auth-slice";
import { signup } from "../store/actions/auth-action";

import classes from "./authPage.module.css";
import styles from "../Components/HomePageComponent/Banner.module.css";

const SignupPage = (props) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const history = useHistory();

	const [values, setValues] = useState({
		firstname: "",
		email: "",
		password: "",
	});
	const handleChange = (email) => (event) => {
		event.preventDefault();

		setValues({ ...values, [email]: event.target.value });
	};

	dispatch(
		authActions.userDetails({
			firstname: values.firstname,
			email: values.email,
			password: values.password,
		})
	);

	const onSubmitHandler = (event) => {
		event.preventDefault();
		dispatch(signup(user, history));
	};

	return (
		<Fragment>
			<div className={classes.container}>
				<form onSubmit={onSubmitHandler}>
					<div className={classes.formcontainer}>
						<h1 className={classes.title}>Signup Here ! </h1>

						<label htmlFor="name" className={classes.lable}>
							Name
						</label>

						<input
							placeholder="FullName"
							type="text"
							id="name"
							onChange={handleChange("firstname")}
						/>

						<label htmlFor="email" className={classes.lable}>
							Email
						</label>
						<input
							placeholder="example@example.com"
							type="email"
							id="email"
							onChange={handleChange("email")}
						/>
						<label htmlFor="password" className={classes.lable}>
							Password
						</label>
						<input
							placeholder="password"
							type="password"
							onChange={handleChange("password")}
						/>

						<NavLink className={classes.link} to="/login">
							Already a user ? Login Here
						</NavLink>

						<button className={styles.btn} onClick={onSubmitHandler}>
							Signup
						</button>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default SignupPage;
