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
	const persons = [
		{ id: 1, name: "person-1" },
		{ id: 2, name: "person-2" },
		{ id: 3, name: "person-3" },
		{ id: 4, name: "person-4" },
		{ id: 5, name: "person-5" },
	];

	const messages = [
		{ id: 1, message: "Hi !" },
		{ id: 2, message: "How are you?" },
		{ id: 3, message: "Yo !" },
		{ id: 4, message: "Yo" },
		{ id: 5, message: "Yo" },
	];

	return (
		<div className={styles.dialogs}>
			<div className={styles.persons}>
				<Person name={persons[0].name} id={persons[0].id} />
				<Person name={persons[1].name} id={persons[1].id} />
				<Person name={persons[2].name} id={persons[2].id} />
				<Person name={persons[3].name} id={persons[3].id} />
				<Person name={persons[4].name} id={persons[4].id} />
			</div>
			<div className={styles.chat}>
				<Message id={messages[0].id} message={messages[0].message} />
				<Message id={messages[1].id} message={messages[1].message} />
				<Message id={messages[2].id} message={messages[2].message} />
				<Message id={messages[3].id} message={messages[3].message} />
				<Message id={messages[4].id} message={messages[4].message} />
			</div>
		</div>
	);
};

export default Dialogs;
