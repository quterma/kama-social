import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import { CustomInput, TextError } from "../CustomForms/CustomForms";

const initialValues = { email: "", password: "", rememberMe: false };
const validationSchema = Yup.object().shape({
	email: Yup.string().email().required("Required!"),
	password: Yup.string().min(8, "Too Short!").max(20, "Too Long!").required("Required!"),
});

// Formik Form Component
const LoginForm = props => {
	console.log(props.error);
	return (
		<Formik initialValues={initialValues} onSubmit={props.onSubmit} validationSchema={validationSchema}>
			<Form>
				<Field className={styles.field} type="email" name="email" placeholder="Enter your email" component={CustomInput} />
				<ErrorMessage name="email" component={TextError} />
				<Field className={styles.field} type="password" name="password" placeholder="Enter your password" component={CustomInput} />
				<ErrorMessage name="password" component={TextError} />
				<label className={styles.label}>
					<Field type="checkbox" name="rememberMe" />
					Remember Me
				</label>
				{props.error && <h3 className={styles.error}>{props.error}</h3>}
				<button className={styles.button} type="submit">
					Login
				</button>
			</Form>
		</Formik>
	);
};

export default LoginForm;
