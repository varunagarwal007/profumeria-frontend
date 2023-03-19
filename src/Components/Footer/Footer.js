import React, { Fragment } from "react";
import classes from "./Footer.module.css";
const Footer = () => {
	return (
		<Fragment>
			<footer>
				<div className={classes.container}>
					<div className={classes.box}>
						<div>
							<ul className={classes.links}>
								<li>Search</li>
								<li>BAKEL</li>
								<li>Montale Profumi</li>
								<li>It was missing</li>
								<li>Montale Perfumes for men</li>
								<li>What is a niche perfume?</li>
								<li>Payments</li>
								<li>Right of withdrawal</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
