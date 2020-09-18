import React from "react";
import styles from "./Dialogs.module.css";
import Person from "./Person/Person";
import Message from "./Message/Message";
import MyMessageContainer from "./MyMessage/MyMessageContainer";

// Dialogs вызывается из App.js (с пропсами).
// Dialogs вызывает через map следующие компоненты (с пропсами): Person, Message
const Dialogs = props => {
	const state = props.store.getState();

	const personsElements = state.dialogsPage.persons.map(person => (
		<Person name={person.name} id={person.id} avatar={person.avatar} />
	));

	const messagesElements = state.dialogsPage.messages.map(message => {
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
			<MyMessageContainer store={props.store} />
		</div>
	);
};

export default Dialogs;
