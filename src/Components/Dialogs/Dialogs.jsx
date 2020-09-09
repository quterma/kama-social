import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Person = (props) => {
	const path = "/dialogs/" + props.id;
	return (
		<div className={styles.person + " " + styles.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

const Message = (props) => {
	return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = (props) => {
	return (
		<div className={styles.dialogs}>
			<div className={styles.persons}>
				<Person name="person-1" id="1" />
				<Person name="person-2" id="2" />
				<Person name="person-3" id="3" />
				<Person name="person-4" id="4" />
				<Person name="person-5" id="5" />
			</div>
			<div className={styles.chat}>
				<Message message="Hi !" />
				<Message message="How are you?" />
				<Message message="Yo !" />
			</div>
		</div>
	);
};

export default Dialogs;
