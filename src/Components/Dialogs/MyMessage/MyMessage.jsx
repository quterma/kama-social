import React from "react";
import styles from "./MyMessage.module.css";

const MyMessage = (props) => {
	const myMessageElement = React.createRef(); // reference to textarea
	const addMyMessage = () => {
		const text = myMessageElement.current.value;
		props.addMyMessage(text);
	};

	return (
		<div className={styles.wrapper}>
			<textarea
				className={styles.textarea}
				name=""
				id=""
				ref={myMessageElement}
			></textarea>
			<button className={styles.button} onClick={addMyMessage}>
				Add message
			</button>
		</div>
	);
};

export default MyMessage;
