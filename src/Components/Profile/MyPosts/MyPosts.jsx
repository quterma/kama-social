import React from "react";
import classNames from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
			<div>My post</div>
			<div>New post</div>
			<div className={classNames.posts}>
				<Post message="Hi, how r u?" likes="15" />
				<Post message="it is my 1st post" likes="20" />
			</div>
		</div>
	);
};

export default MyPosts;
