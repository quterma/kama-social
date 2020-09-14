import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	const postsElements = props.profilePage.posts.map((post) => (
		<Post message={post.post} likes={post.likes} />
	));

	const newPostElement = React.createRef(); // reference to textarea

	// get value from textarea and alert it
	const addMyPost = () => {
		props.dispatch({ type: "ADD-MY-POST" });
	};

	const onPostChange = () => {
		const text = newPostElement.current.value;
		props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
	};

	return (
		<div className={styles.wrapper}>
			<div>My post</div>
			<div className={styles.newPost}>
				<textarea
					ref={newPostElement}
					className={styles.textarea}
					onChange={onPostChange}
					value={props.profilePage.newPostText}
				/>
				<button className={styles.button} onClick={addMyPost}>
					Add post
				</button>
			</div>
			<div className={styles.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
