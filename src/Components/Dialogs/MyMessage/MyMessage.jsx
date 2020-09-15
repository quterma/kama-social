import React from "react";
import styles from "./MyMessage.module.css";
import {
	addMyMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "./../../../Redux/store";

const MyMessage = (props) => {
	// create a reference (for textarea)
	const myMessageElement = React.createRef();

	// textarea onchange listener callback f() -> calls dispatch f() - push chars to BLL
	const onMessageChange = () => {
		const text = myMessageElement.current.value;
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
				name=""
				id=""
				ref={myMessageElement}
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
