import React from "react";
import styles from "./Dialogs.module.css";
import Person from "./Person/Person";
import Message from "./Message/Message";

// Dialogs вызывается из App.js (с пропсами).
// Dialogs вызывает через map следующие компоненты (с пропсами): Person, Message
const Dialogs = (props) => {
	const personsElements = props.state.persons.map((person) => (
		<Person name={person.name} id={person.id} />
	));

	const messagesElements = props.state.messages.map((message) => (
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
