import React from "react";
import classNames from "./Profile.module.css";

const Profile = () => {
	return (
		<main className={classNames.profile}>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqE3wagRFYOebX6edSEZ8VLcWW-QWRyiIqLw&usqp=CAU"
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
			<div>
				<div>My post</div>
				<div>New post</div>
			</div>
			<div>
				<div>post 1</div>
				<div>post 2</div>
			</div>
		</main>
	);
};

export default Profile;
