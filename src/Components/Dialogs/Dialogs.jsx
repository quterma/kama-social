import React from "react";
import styles from "./Dialogs.module.css";
import Person from "./Persons/Person";
import Message from "./Messages/Message";

const Dialogs = (props) => {
	const personsElements = props.persons.map((person) => (
		<Person name={person.name} id={person.id} />
	));

	const messagesElements = props.messages.map((message) => (
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
