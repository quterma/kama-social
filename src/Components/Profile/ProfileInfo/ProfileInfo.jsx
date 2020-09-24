import React from "react";
import styles from "./ProfileInfo.module.css";
import { Preloader } from "./../../Preloader/Preloader";

//Дем компонента
const ProfileInfo = props => {
	if (!props.profile) return <Preloader />;

	return (
		<>
			{/* картинка-обои сверху */}
			<img src="https://picsum.photos/1000/150" className={styles.image} alt="sea" />

			<div>
				<img className={styles.avatar} alt="avatar" src={props.profile.photos.large} />
				<div className={styles.description}>description</div>
			</div>
		</>
	);
};

export default ProfileInfo;
