import React from "react";
import styles from "./App.module.css";
import "./css/reset.css";
import Navbar from "./Components/Navbar/Navbar";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import { Route } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import { UsersContainer } from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import { HeaderContainer } from "./Components/Header/HeaderContainer";

// верхняя компонента
const App = () => {
	return (
		<div className={styles.wrapper}>
			<HeaderContainer />
			<Navbar />
			<div className={styles.gridContent}>
				<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
				<Route path="/dialogs" render={() => <DialogsContainer />} />
				<Route path="/users" render={() => <UsersContainer />} />
				<Route path="/news" component={News} />
				<Route path="/music" component={Music} />
				<Route path="/settings" component={Settings} />
			</div>
		</div>
	);
};

export default App;
