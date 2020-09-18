import React from "react";
import styles from "./MyMessage.module.css";

const MyMessage = props => {
	// textarea onchange listener callback f() -> calls dispatch f() - push chars to BLL
	const onMessageChange = event => {
		const text = event.target.value;
		props.updateNewMessageText(text);
	};

	// button onclick listener callback f() -> calls dispatch f()
	const onMyMessageClick = () => props.addMyMessage();

	return (
		<div className={styles.wrapper}>
			<textarea
				className={styles.textarea}
				onChange={onMessageChange}
				value={props.newMessageText}
			></textarea>
			<button className={styles.button} onClick={onMyMessageClick}>
				Add message
			</button>
		</div>
	);
};

export default MyMessage;
