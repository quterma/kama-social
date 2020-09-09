import React from "react";
import styles from "./Person.module.css";
import { NavLink } from "react-router-dom";

const Person = (props) => {
	const path = "/dialogs/" + props.id;
	return (
		<div className={styles.person + " " + styles.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

export default Person;
