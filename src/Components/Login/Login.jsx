import React from "react";
import LoginForm from "../Common/Forms/LoginForm/LoginForm";
import styles from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "./../../Redux/authReducer";
import { Redirect } from "react-router-dom";

const Login = ({ isAuth,login, error }) => {
	if (isAuth) return <Redirect to="/profile" />;

	//code for onSubmit process
	const onSubmit = ({ email, password, rememberMe }) => {
		login(email, password, rememberMe);
	};

	return (
		<div>
			<h1 className={styles.title}>Login Page</h1>
			<LoginForm onSubmit={onSubmit} error={error} />
		</div>
	);
};

const mstp = state => ({ isAuth: state.auth.isAuth, error: state.auth.error });
const mdtp = { login };

export default connect(mstp, mdtp)(Login);
