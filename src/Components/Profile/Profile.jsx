import React from "react";
// import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				profilePage={props.profilePage}
				addMyPost={props.addMyPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	);
};

export default Profile;
