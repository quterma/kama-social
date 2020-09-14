import React from "react";
import styles from "./MyMessage.module.css";

const MyMessage = (props) => {
	const myMessageElement = React.createRef(); // reference to textarea

	const addMyMessage = () => {
		debugger;
		props.dispatch({ type: "ADD-MY-MESSAGE" });
	};

	const onMessageChange = () => {
		const text = myMessageElement.current.value;
		props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: text });
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
