import React from "react";
import styles from "./MyMessage.module.css";

// Дем компонента
const MyMessage = props => {
	// textarea onchange listener callback f() -> вызывает пропснутую диспатч функцию
	const onMessageChange = event => {
		const text = event.target.value;
		props.updateNewMessageText(text);
	};

	// button onclick listener callback f() -> вызывает пропснутую диспатч функцию
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
