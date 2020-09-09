import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={styles.wrapper}>
			<div>My post</div>
			<div className={styles.newPost}>
				<textarea
					className={styles.textarea}
					name=""
					id=""
					cols="30"
					rows="10"
				></textarea>
				<button className={styles.button}>Add post</button>
			</div>
			<div className={styles.posts}>
				<Post message="Hi, how r u?" likes="15" />
				<Post message="it is my 1st post" likes="20" />
			</div>
		</div>
	);
};

export default MyPosts;
