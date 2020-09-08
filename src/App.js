import React from "react";
import styles from "./App.module.css";
import "./css/reset.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Navbar />
			<div className={styles.gridContent}>
				{/* <Profile /> */}
				<Dialogs />
			</div>
		</div>
	);
};

export default App;
