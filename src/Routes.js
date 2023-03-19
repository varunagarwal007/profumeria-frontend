import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { isAuthenticated } from "./store/actions/auth-action";

export const UserRoute = ({ component: Component, ...rest }) => {
	const user = isAuthenticated();

	return (
		<Route
			{...rest}
			render={(props) =>
				user ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

export const AdminRoute = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.user);
	return (
		<Route
			{...rest}
			render={(props) =>
				user.isAdmin ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};
