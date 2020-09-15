import React from "react";
import styles from "./MyMessage.module.css";
import {
	addMyMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "./../../../Redux/store";

const MyMessage = (props) => {
	// create a reference (for textarea)

	// textarea onchange listener callback f() -> calls dispatch f() - push chars to BLL
	const onMessageChange = (event) => {
		const text = event.target.value;
		props.dispatch(updateNewMessageTextActionCreator(text));
	};

	// button onclick listener callback f() -> calls dispatch f()
	const addMyMessage = () => {
		debugger;
		props.dispatch(addMyMessageActionCreator());
	};

	return (
		<div className={styles.wrapper}>
			<textarea
				className={styles.textarea}
				onChange={onMessageChange}
				value={props.dialogsPage.newMessageText}
			></textarea>
			<button className={styles.button} onClick={addMyMessage}>
				Add message
			</button>
		</div>
	);
};

export default MyMessage;
