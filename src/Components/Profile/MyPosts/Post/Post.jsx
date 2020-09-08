import React from "react";
import classNames from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={classNames.item}>
			<img
				className={classNames.avatar}
				src="https://picsum.photos/50"
				alt="avatar"
			/>
			<p className={classNames.text}>{props.message}</p>
			<p className={classNames.text}> this post got {props.likes} likes</p>
		</div>
	);
};

export default Post;
