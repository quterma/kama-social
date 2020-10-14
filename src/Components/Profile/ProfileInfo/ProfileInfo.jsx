import React from "react";
import styles from "./ProfileInfo.module.css";
import { IconLink } from "./../../Common/IconLink/IconLink";
import incognito from "./../../../assets/images/incognito.png";
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

//Дем компонента
const ProfileInfo = props => {
	const contacts = Object.entries(props.profile.contacts);
	const socialElements = contacts.map((contact, i) => (contact[1] ? <IconLink key={i} network={contact[0]} link={contact[1]} /> : null));

	const onAvatarSelected = (event) => {
	if (event.target.files) {
		props.savePhoto(event.target.files[0]);
	}
	}
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.avatarWrapper}>
				<img className={styles.avatar} alt="avatar" src={props.profile.photos.large || incognito} />
			</div>
			{props.isOwner && <input type='file' onChange={onAvatarSelected}/>}
			<div className={styles.name}>Fullname: {props.profile.fullName}</div>
			<div className={styles.aboutMe}>About me: {props.profile.aboutMe}</div>
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
			<div className={styles.lookingForAJobContainer}>
				<i className={`${styles.lookingForAJob} ${props.profile.lookingForAJob ? "fas fa-gamepad" : "fas fa-user-tie"}`} />
				<div className={styles.lookingForAJobDescription}>LFJ description: {props.profile.lookingForAJobDescription}</div>
			</div>
			<div className={styles.socialContainer}>{socialElements}</div>
		</div>
	);
};

export default ProfileInfo;
