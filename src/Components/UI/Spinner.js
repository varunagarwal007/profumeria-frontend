import React from "react";
import ReactDOM from "react-dom";

import classes from "./Spinner.module.css";

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Loading = (props) => {
	return (
		<div>
			<div className={classes.container}>
				<div className={classes.loading}>
					<p>loading</p>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

const Spinner = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Loading onConfirm={props.onConfirm} />,
				document.getElementById("loading")
			)}
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop")
			)}
		</React.Fragment>
	);
};

export default Spinner;
