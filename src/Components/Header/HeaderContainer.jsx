import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuth } from "./../../Redux/authReducer";

// class component - container
class HeaderApiContainer extends Component {
	componentDidMount() {
		this.props.getAuth(this.props.id);
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
const mdtp = { getAuth };

export const HeaderContainer = connect(mstp, mdtp)(HeaderApiContainer);
