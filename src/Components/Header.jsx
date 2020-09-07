import React from "react";
import classNames from "./Header.module.css";

const Header = () => {
	return (
		<header className={classNames.header}>
			<img
				className={classNames.logo}
				src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
				alt="logo"
			/>
		</header>
	);
};

export default Header;
