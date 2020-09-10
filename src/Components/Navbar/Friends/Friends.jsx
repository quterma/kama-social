import React from "react";
import styles from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
	const chosenFriends = props.persons.map((person) => {
		return (
			person.isFriend && (
				<Friend name={person.name} id={person.id} avatar={person.avatar} />
			)
		);
	});

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Friends</h3>
			<div className={styles.container}>{chosenFriends}</div>
		</div>
	);
};

export default Friends;
