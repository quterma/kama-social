import React from "react";
import LoginForm from "../Common/Forms/LoginForm/LoginForm";
import styles from "./Login.module.css";

const Login = props => {
	//code for onSubmit process
	const onSubmit = values => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
		}, 400);
	};

	return (
		<div>
			<h1 className={styles.title}>Login Page</h1>
			<LoginForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
