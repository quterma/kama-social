import React from "react";
import "./App.css";
import "./css/reset.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";

const App = () => {
	return (
		<div className="app__wrapper">
			<Header />
			<Navbar />
			<Profile />
		</div>
	);
};

export default App;
