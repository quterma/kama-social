import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.persons}>
				<div className={styles.person + " " + styles.active}>
					<NavLink to="/dialogs/1">person 1</NavLink>
				</div>
				<div className={styles.person}>
					<NavLink to="/dialogs/2">person 2</NavLink>
				</div>
				<div className={styles.person}>
					<NavLink to="/dialogs/3">person 3</NavLink>
				</div>
				<div className={styles.person}>
					<NavLink to="/dialogs/4">person 4</NavLink>
				</div>
				<div className={styles.person}>
					<NavLink to="/dialogs/5">person 5</NavLink>
				</div>
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
