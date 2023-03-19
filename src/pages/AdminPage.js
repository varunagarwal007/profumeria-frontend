import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import classes from "./Admin.module.css";

const AdminPage = () => {
	const user = useSelector((state) => state.user);
	return (
		<React.Fragment>
			<div className={classes.container}>
				{!user.isLoggedIn && <Redirect to="/login" />}
				<h1>New page</h1>
			</div>
		</React.Fragment>
	);
};

export default AdminPage;
