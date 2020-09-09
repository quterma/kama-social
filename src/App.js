import React from "react";
import styles from "./App.module.css";
import "./css/reset.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className={styles.wrapper}>
				<Header />
				<Navbar />
				<div className={styles.gridContent}>
					<Route
						path="/profile"
						render={() => <Profile posts={props.posts} />}
					/>
					<Route
						path="/dialogs"
						render={() => (
							<Dialogs persons={props.persons} messages={props.messages} />
						)}
					/>
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
