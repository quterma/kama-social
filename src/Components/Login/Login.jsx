import React from "react";
import LoginForm from "../Common/Forms/LoginForm/LoginForm";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "./../../Redux/authReducer";
import { Redirect } from "react-router-dom";

const Login = props => {
	if (props.isAuth) return <Redirect to="/profile" />;

	//code for onSubmit process
	const onSubmit = ({ email, password, rememberMe }) => {
		props.login(email, password, rememberMe);
	};

	return (
		<div>
			<h1 className={styles.title}>Login Page</h1>
			<LoginForm onSubmit={onSubmit} />
		</div>
	);
};

const mstp = state => ({ isAuth: state.auth.isAuth });

export default connect(mstp, { login })(Login);
