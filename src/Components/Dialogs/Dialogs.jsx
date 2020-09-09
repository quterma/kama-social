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

	const personsElements = persons.map((person) => (
		<Person name={person.name} id={person.id} />
	));

	const messagesElements = messages.map((message) => (
		<Message id={message.id} message={message.message} />
	));

	return (
		<div className={styles.dialogs}>
			<div className={styles.persons}>{personsElements}</div>
			<div className={styles.chat}>{messagesElements}</div>
		</div>
	);
};

export default Dialogs;
