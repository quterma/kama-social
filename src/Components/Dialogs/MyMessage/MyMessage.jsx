import React from "react";
import styles from "./MyMessage.module.css";

const MyMessage = (props) => {
	const myMessageElement = React.createRef(); // reference to textarea

	const addMyMessage = () => {
		props.store.addMyMessage();
	};

	const onMessageChange = () => {
		const text = myMessageElement.current.value;
		props.store.updateNewMessageText(text);
	};

	return (
		<div className={styles.wrapper}>
			<textarea
				className={styles.textarea}
				name=""
				id=""
				ref={myMessageElement}
				onChange={onMessageChange}
				value={props.store.state.dialogsPage.newMessageText}
			></textarea>
			<button className={styles.button} onClick={addMyMessage}>
				Add message
			</button>
		</div>
	);
};

export default MyMessage;
