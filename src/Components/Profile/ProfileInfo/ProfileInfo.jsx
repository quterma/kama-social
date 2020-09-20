import React from "react";
import styles from "./ProfileInfo.module.css";

//Дем компонента
const ProfileInfo = () => {
	return (
		<div>
			<img
				src="https://picsum.photos/1000/150"
				className={styles.image}
				alt="sea"
			/>
			<div>
				<img
					className={styles.avatar}
					alt="avatar"
					src="https://picsum.photos/200"
				/>
				<div className={styles.description}>description</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
