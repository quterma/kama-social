import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

// Дем компонента
const MyPosts = props => {
	// мапит из пропс.posts объект из компонент Post
	const postsElements = props.posts.map(post => <Post key={post.id} post={post.post} likes={post.likes} />);

	// textarea onchange listener callback f() -> вызывает пропснутую диспатч функцию
	const onPostChange = event => {
		const text = event.target.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={styles.wrapper}>
			<div>My post</div>
			<div className={styles.newPost}>
				<textarea className={styles.textarea} onChange={onPostChange} value={props.newPostText} />
				<button className={styles.button} onClick={() => props.addMyPost()}>
					Add post
				</button>
			</div>
			<div className={styles.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
