import React from "react";
import styles from "./Preloader.module.css";

export const Preloader = () => {
	return (
		<div class={styles.ldsRing}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
