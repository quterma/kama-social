import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
	const postsElements = props.store.state.profilePage.posts.map((post) => (
		<Post message={post.post} likes={post.likes} />
	));

	const newPostElement = React.createRef(); // reference to textarea

	// get value from textarea and alert it
	const addMyPost = () => {
		props.store.addMyPost();
	};

	const onPostChange = () => {
		const text = newPostElement.current.value;
		props.store.updateNewPostText(text);
	};

	return (
		<div className={styles.wrapper}>
			<div>My post</div>
			<div className={styles.newPost}>
				<textarea
					ref={newPostElement}
					className={styles.textarea}
					onChange={onPostChange}
					value={props.store.state.profilePage.newPostText}
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
