import React from "react";
import classNames from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<main className={classNames.profile}>
			<img
				src="https://image.shutterstock.com/image-vector/wide-space-image-260nw-1129045574.jpg"
				className={classNames.image}
				alt="sea"
			/>
			<div>
				<img
					className={classNames.avatar}
					alt="avatar"
					src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
				/>
				<div className={classNames.description}>description</div>
			</div>
			<MyPosts />
		</main>
	);
};

export default Profile;
