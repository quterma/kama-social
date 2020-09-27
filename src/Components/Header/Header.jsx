import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import incognito from "./../../assets/images/incognito.png";

// Дем компонента
const Header = props => {
	return (
		<header className={styles.wrapper}>
			<img
				className={styles.logo}
				src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
				alt="logo"
			/>
			<div className={styles.loginWrapper}>
				{props.isAuth ? (
					<>
						<span>
							<img className={styles.avatar} src={props.photo ? props.photo : incognito} alt="ava" />
						</span>
						<span>{props.login}</span>
					</>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
