import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
	return (
		<nav className={styles.wrapper}>
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
					className={styles.link + " " + styles.margin50}
					activeClassName={styles.active}
					to="/Settings"
				>
					Settings
				</NavLink>
				<div className={styles.item}>
					<Friends persons={props.persons} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
