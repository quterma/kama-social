import React, { Component } from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData, setAuthUserPhoto } from "./../../Redux/authReducer";

// class component - container
class HeaderApiContainer extends Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
			if (response.data.resultCode === 0) {
				const { id, email, login } = response.data.data;
				this.props.setAuthUserData(id, email, login);
				this.getLoginPhoto(this.props.id);
			}
		});
	}

	getLoginPhoto(userId) {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
			this.props.setAuthUserPhoto(response.data.photos.small);
		});
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
