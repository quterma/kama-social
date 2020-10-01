import React from "react";
import styles from "./App.module.css";
import "./css/reset.css";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

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
				<Route path="/login" render={() => <LoginPage />} />
				<Route path="/news" component={News} />
				<Route path="/music" component={Music} />
				<Route path="/settings" component={Settings} />
			</div>
		</div>
	);
};

export default App;
