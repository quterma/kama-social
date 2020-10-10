import React, { Component } from "react";
import styles from "./App.module.css";
import "./css/reset.css";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/appReducer";
import { Preloader } from "./components/Common/Preloader/Preloader";

// верхняя компонента
class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}

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
	}
}

const mstp = state => ({ initialized: state.app.initialized, userId: state.auth.id });
const mdtp = { initializeApp };

export default compose(withRouter, connect(mstp, mdtp))(App);
