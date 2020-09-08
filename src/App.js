import React from "react";
import classnames from "./App.module.css";
import "./css/reset.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

const App = () => {
	return (
		<div className={classnames.wrapper}>
			<Header />
			<Navbar />
			<Profile />
		</div>
	);
};

export default App;
