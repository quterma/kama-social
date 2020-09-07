import React from "react";
import classNames from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={classNames.nav}>
			<div className={classNames.item}>
				<a href="#/">Profile</a>
			</div>
			<div className={classNames.item}>
				<a href="#/">Messages</a>
			</div>
			<div className={classNames.item}>
				<a href="#/">news</a>
			</div>
			<div className={classNames.item}>
				<a href="#/">Music</a>
			</div>
			<div className={classNames.item}>
				<a href="#/">Settings</a>
			</div>
		</nav>
	);
};

export default Navbar;
