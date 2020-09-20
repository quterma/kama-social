import React from "react";
import styles from "./Header.module.css";

// Дем компонента
const Header = () => {
	return (
		<header className={styles.wrapper}>
			<img
				className={styles.logo}
				src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
				alt="logo"
			/>
		</header>
	);
};

export default Header;
