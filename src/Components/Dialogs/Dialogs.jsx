import React from "react";
import styles from "./Dialogs.module.css";
import Person from "./Person/Person";
import Message from "./Message/Message";
import MyMessageContainer from "./MyMessage/MyMessageContainer";

// Dialogs вызывается из App.js (с пропсами).
// Dialogs вызывает через map следующие компоненты (с пропсами): Person, Message
const Dialogs = props => {
	const personsElements = props.persons.map(person => (
		<Person name={person.name} id={person.id} avatar={person.avatar} />
	));

	const messagesElements = props.messages.map(message => {
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
			<MyMessageContainer />
		</div>
	);
};

export default Dialogs;
