import React, { Fragment } from "react";

import classes from "./Banner.module.css";
const Banner = () => {
	return (
		<Fragment>
			<div className={classes.container}>
				<div className={classes.textbox}>
					<h1
						style={{
							color: "#fff",
							fontSize: "8rem",
							fontWeight: "300",
							margin: "0 0  1.5rem 0",
						}}>
						Profumeria Mon Amour
					</h1>

					<h3 style={{ color: "#000", fontSize: "3rem", fontWeight: "200" }}>
						Passione per i profumi di nicchia dal 2003
					</h3>
					<button className={classes.btn}>Catalog</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Banner;
