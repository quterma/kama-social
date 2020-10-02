import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import incognito from "./../../assets/images/incognito.png";
import logo from "./../../assets/images/react.png";

// Дем компонента
const Header = props => {
	return (
		<header className={styles.wrapper}>
			<img className={styles.logo} src={logo} alt="logo" />
			<a className={styles.apiLink} target="_blank" rel="noopener noreferrer" href="https://social-network.samuraijs.com">
				SamuraiJS Social Network API
			</a>
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
