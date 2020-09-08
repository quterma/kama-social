import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={styles.item}>
			<img
				className={styles.avatar}
				src="https://picsum.photos/50"
				alt="avatar"
			/>
			<p className={styles.text}>{props.message}</p>
			<p className={styles.text}> this post got {props.likes} likes</p>
		</div>
	);
};

export default Post;
