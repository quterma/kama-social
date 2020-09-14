import React from "react";
import styles from "./Dialogs.module.css";
import Person from "./Person/Person";
import Message from "./Message/Message";
import MyMessage from "./MyMessage/MyMessage";

// Dialogs вызывается из App.js (с пропсами).
// Dialogs вызывает через map следующие компоненты (с пропсами): Person, Message
const Dialogs = (props) => {
	const personsElements = props.dialogsPage.persons.map((person) => (
		<Person name={person.name} id={person.id} avatar={person.avatar} />
	));

	const messagesElements = props.dialogsPage.messages.map((message) => {
		let place = "left";
		if (message.id % 2 === 0) {
			place = "right";
		}
		return <Message id={message.id} message={message.message} place={place} />;
	});

	return (
		<div className={styles.wrapper}>
			<div className={styles.persons}>{personsElements}</div>
			<div className={styles.chat}>{messagesElements}</div>
			<MyMessage dialogsPage={props.dialogsPage} dispatch={props.dispatch} />
		</div>
	);
};

export default Dialogs;
