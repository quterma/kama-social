import React from "react";
import styles from "./ProfileInfo.module.css";
import { IconLink } from "./../../Common/IconLink/IconLink";
import incognito from "./../../../assets/images/incognito.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

//Дем компонента
const ProfileInfo = props => {
	const contacts = Object.entries(props.profile.contacts);
	const socialElements = contacts.map((contact, i) =>
		contact[1] ? <IconLink key={i} network={contact[0]} link={contact[1]} /> : null
	);
	return (
		<div className={styles.wrapper}>
			<div className={styles.avatarWrapper}>
				<img
					className={styles.avatar}
					alt="avatar"
					src={props.profile.photos.large ? props.profile.photos.large : incognito}
				/>
			</div>
			<div className={styles.name}>{props.profile.fullName}</div>
			<ProfileStatus aboutMe={props.profile.aboutMe} />
			<div className={styles.lookingForAJobContainer}>
				<i
					className={`${styles.lookingForAJob} ${props.profile.lookingForAJob ? "fas fa-gamepad" : "fas fa-user-tie"}`}
				/>
				<div className={styles.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
			</div>

			<div className={styles.socialContainer}>{socialElements}</div>
		</div>
	);
};

export default ProfileInfo;
