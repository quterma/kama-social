import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<NavLink
					className={styles.link}
					activeClassName={styles.active}
					to="/Profile"
				>
					Profile
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink
					className={styles.link}
					activeClassName={styles.active}
					to="/Dialogs"
				>
					Dialogs
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink
					className={styles.link}
					activeClassName={styles.active}
					to="/News"
				>
					News
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink
					className={styles.link}
					activeClassName={styles.active}
					to="/Music"
				>
					Music
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink
					className={styles.link}
					activeClassName={styles.active}
					to="/Settings"
				>
					Settings
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
