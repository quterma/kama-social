import React from "react";
import classNames from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={classNames.nav}>
			<div className={`${classNames.item} ${classNames.active}`}>
				<a className={classNames.link} href="#/">
					Profile
				</a>
			</div>
			<div className={classNames.item}>
				<a className={classNames.link} href="#/">
					Messages
				</a>
			</div>
			<div className={classNames.item}>
				<a className={classNames.link} href="#/">
					news
				</a>
			</div>
			<div className={classNames.item}>
				<a className={classNames.link} href="#/">
					Music
				</a>
			</div>
			<div className={classNames.item}>
				<a className={classNames.link} href="#/">
					Settings
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
