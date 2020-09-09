import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
	const posts = [
		{ id: 1, post: "Hi, how r u?", likes: 15 },
		{ id: 2, post: "it is my 1st post", likes: 20 },
	];

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
				<Post message={posts[0].post} likes={posts[0].likes} />
				<Post message={posts[1].post} likes={posts[1].likes} />
			</div>
		</div>
	);
};

export default MyPosts;
