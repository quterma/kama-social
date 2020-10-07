import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import { CustomInput, TextError } from "../CustomForms/CustomForms";

const initialValues = { login: "", password: "", rememberMe: false };
const validationSchema = Yup.object().shape({
	login: Yup.string().min(6, "Too Short!").max(20, "Too Long!").required("Required!"),
	password: Yup.string().min(6, "Too Short!").max(20, "Too Long!").required("Required!"),
});

// Formik Form Component
const LoginForm = props => {
	return (
		<Formik initialValues={initialValues} onSubmit={props.onSubmit} validationSchema={validationSchema}>
			<Form>
				<Field className={styles.field} type="text" name="login" placeholder="Enter your login" component={CustomInput} />
				<ErrorMessage name="login" component={TextError} />
				<Field className={styles.field} type="password" name="password" placeholder="Enter your password" component={CustomInput} />
				<ErrorMessage name="password" component={TextError} />
				<label className={styles.label}>
					<Field type="checkbox" name="rememberMe" />
					Remember Me
				</label>
				<button className={styles.button} type="submit">
					Login
				</button>
			</Form>
		</Formik>
	);
};

export default LoginForm;
