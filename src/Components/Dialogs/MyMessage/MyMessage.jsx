import React from "react";
import styles from "./MyMessage.module.css";
import AddMessageForm from "./../../Common/Forms/AddMessageForm/AddMessageForm";

// Дем компонента
const MyMessage = props => {
	//code for onSubmit process
	const addNewMessage = (values, { setSubmitting }) => {
		props.addMyMessage(values.textarea);
		setSubmitting(false);
	};

	return (
		<div className={styles.wrapper}>
			<AddMessageForm onSubmit={addNewMessage} />
		</div>
	);
};

export default MyMessage;
