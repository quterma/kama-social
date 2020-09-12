import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	const postsElements = props.posts.map((post) => (
		<Post message={post.post} likes={post.likes} />
	));
	const newPostElement = React.createRef(); // reference to textarea

	// get value from textarea and alert it
	const addMyPost = () => {
		const text = newPostElement.current.value;
		props.addMyPost(text);
	};

	return (
		<div className={styles.wrapper}>
			<div>My post</div>
			<div className={styles.newPost}>
				<textarea
					ref={newPostElement}
					className={styles.textarea}
					name=""
					id=""
				></textarea>
				<button className={styles.button} onClick={addMyPost}>
					Add post
				</button>
			</div>
			<div className={styles.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
