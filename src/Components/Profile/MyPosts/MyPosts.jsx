import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	const postsElements = props.posts.map((post) => (
		<Post message={post.post} likes={post.likes} />
	));

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
			<div className={styles.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
