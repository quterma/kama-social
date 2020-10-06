import React from "react";
import { Form, Formik } from "formik";
import styles from "./AddMyMessageForm.module.css";

// Formik Form Component
const AddMessageForm = props => {
	return (
		<Formik initialValues={{ textarea: "" }} onSubmit={props.onSubmit}>
			{({ isSubmitting, values, handleBlur, handleChange }) => (
				<Form>
					<textarea
						className={styles.textarea}
						name="textarea"
						value={values.name}
						onBlur={handleBlur}
						onChange={handleChange}
						placeholder="Enter your post"
					/>
					<button className={styles.button} type="submit" disabled={isSubmitting}>
						Add message
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default AddMessageForm;
