import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.persons}>
				<div className={styles.person + " " + styles.active}>person 1</div>
				<div className={styles.person}>person 2</div>
				<div className={styles.person}>person 3</div>
				<div className={styles.person}>person 4</div>
				<div className={styles.person}>person 5</div>
			</div>
			<div className={styles.chat}>
				<div className={styles.message}>Hi!</div>
				<div className={styles.message}>How are you?</div>
				<div className={styles.message}>Yo!</div>
			</div>
		</div>
	);
};

export default Dialogs;
