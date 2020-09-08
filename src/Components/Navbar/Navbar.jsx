import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={`${styles.item} ${styles.active}`}>
				<a className={styles.link} href="/Profile">
					Profile
				</a>
			</div>
			<div className={styles.item}>
				<a className={styles.link} href="/Dialogs">
					Messages
				</a>
			</div>
			<div className={styles.item}>
				<a className={styles.link} href="/News">
					News
				</a>
			</div>
			<div className={styles.item}>
				<a className={styles.link} href="/Music">
					Music
				</a>
			</div>
			<div className={styles.item}>
				<a className={styles.link} href="/Settings">
					Settings
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
