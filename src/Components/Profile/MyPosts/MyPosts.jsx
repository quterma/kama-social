import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

// Дем компонента
const MyPosts = props => {
	// мапит из пропс.posts объект из компонент Post
	const postsElements = props.posts.map(post => (
		<Post post={post.post} likes={post.likes} />
	));

	// textarea onchange listener callback f() -> вызывает пропснутую диспатч функцию
	const onPostChange = event => {
		const text = event.target.value;
		props.updateNewPostText(text);
	};

	// button onclick listener callback f() -> вызывает пропснутую диспатч функцию
	const onAddMyPost = () => props.addMyPost();

	return (
		<div className={styles.wrapper}>
			<div>My post</div>
			<div className={styles.newPost}>
				<textarea
					className={styles.textarea}
					onChange={onPostChange}
					value={props.newPostText}
				/>
				<button className={styles.button} onClick={onAddMyPost}>
					Add post
				</button>
			</div>
			<div className={styles.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
