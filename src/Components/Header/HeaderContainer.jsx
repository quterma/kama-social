import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, setAuthUserPhoto } from "./../../Redux/authReducer";
import { requestsAPI } from "./../../api/api";

// class component - container
class HeaderApiContainer extends Component {
	componentDidMount() {
		requestsAPI.getAuth().then(data => {
			if (data.resultCode === 0) {
				const { id, email, login } = data.data;
				this.props.setAuthUserData(id, email, login);
				this.getLoginPhoto(this.props.id);
			}
		});
	}

	getLoginPhoto(userId) {
		requestsAPI.getProfile(userId).then(data => this.props.setAuthUserPhoto(data.photos.small));
	}

	render() {
		return <Header {...this.props} />;
	}
}

const mstp = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	id: state.auth.id,
	photo: state.auth.photo,
});
const mdtp = { setAuthUserData, setAuthUserPhoto };

export const HeaderContainer = connect(mstp, mdtp)(HeaderApiContainer);
