import React from "react";
import styles from "./Message.module.css";

// Message вызывается из Dialogs.js (с пропсами).
// Message отрисовывает 1элемент Message
const Message = (props) => {
	return <div className={styles.message}>{props.message}</div>;
};

export default Message;
