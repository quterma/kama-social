import React from "react";
import styles from "./App.module.css";
import "./css/reset.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import { Route } from "react-router-dom";

// App рендерится из index.js (с пропсами).
// App вызывает через BrowserRouter следующие компоненты (с пропсами): Header, Navbar, Profile/Dialogs/News/Music/Settings
const App = (props) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Navbar persons={props.store.getState().dialogsPage.persons} />
			<div className={styles.gridContent}>
				<Route
					path="/profile"
					render={() => (
						<Profile
							profilePage={props.store.getState().profilePage}
							addMyPost={props.store.addMyPost.bind(props.store)}
							updateNewPostText={props.store.updateNewPostText.bind(
								props.store
							)}
						/>
					)}
				/>
				<Route
					path="/dialogs"
					render={() => (
						<Dialogs
							dialogsPage={props.store.getState().dialogsPage}
							addMyMessage={props.store.addMyMessage.bind(props.store)}
							updateNewMessageText={props.store.updateNewMessageText.bind(
								props.store
							)}
						/>
					)}
				/>
				<Route path="/news" component={News} />
				<Route path="/music" component={Music} />
				<Route path="/settings" component={Settings} />
			</div>
		</div>
	);
};

export default App;
