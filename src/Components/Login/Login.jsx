import { Field, Form, Formik } from "formik";
import React from "react";
import styles from "./Login.module.css";

// Formik Login Form Component
const LoginFormComponent = props => {
	return (
		<Formik initialValues={props.initialValues} onSubmit={props.onSubmit}>
			{({ isSubmitting, values }) => (
				<Form>
					<label className={styles.label}>
						Login
						<Field className={styles.field} type="text" name="login" placeholder="Enter your login" value={values.name} />
					</label>
					<label className={styles.label}>
						Password
						<Field className={styles.field} type="password" name="password" placeholder="Enter your password" value={values.name} />
					</label>
					<label className={styles.label}>
						<Field type="checkbox" name="rememberMe" />
						Remember Me
					</label>
					<button className={styles.button} type="submit" disabled={isSubmitting}>
						Login
					</button>
				</Form>
			)}
		</Formik>
	);
};

const Login = props => {
	//code for onSubmit process
	const onSubmit = (values, { setSubmitting, resetForm }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			resetForm();
			setSubmitting(false);
		}, 400);
	};

	const initialValues = { login: "", password: "", rememberMe: false };

	return (
		<div>
			<h1 className={styles.title}>Login Page</h1>
			<LoginFormComponent initialValues={initialValues} onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
