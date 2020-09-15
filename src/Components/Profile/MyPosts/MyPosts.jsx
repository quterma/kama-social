import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
	addMyPostActionCreator,
	updateNewPostTextActionCreator,
} from "./../../../Redux/store";

const MyPosts = (props) => {
	// mapping posts array (from BLL) to array of Post components
	const postsElements = props.profilePage.posts.map((post) => (
		<Post message={post.post} likes={post.likes} />
	));

	// textarea onchange listener callback f() -> calls dispatch f() - push chars to BLL
	const onPostChange = (event) => {
		const text = event.target.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	};

	// button onclick listener callback f() -> calls dispatch f()
	const addMyPost = () => {
		props.dispatch(addMyPostActionCreator());
	};

	return (
		<div className={styles.wrapper}>
			<div>My post</div>
			<div className={styles.newPost}>
				<textarea
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
