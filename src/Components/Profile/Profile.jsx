import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

//Дем компонента
const Profile = () => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
