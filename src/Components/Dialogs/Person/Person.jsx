import React from "react";
import styles from "./Person.module.css";
import { NavLink } from "react-router-dom";

// Person вызывается из Dialogs.js (с пропсами).
// Person отрисовывает 1 элемент Person
const Person = (props) => {
	const path = "/dialogs/" + props.id;
	return (
		<div className={styles.person + " " + styles.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

export default Person;
