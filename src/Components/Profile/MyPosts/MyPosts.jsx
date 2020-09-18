import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
	// mapping posts array (from BLL) to array of Post components
	const postsElements = props.profilePage.posts.map(post => (
		<Post post={post.post} likes={post.likes} />
	));

	// textarea onchange listener callback f() -> calls dispatch f() - push chars to BLL
	const onPostChange = event => {
		const text = event.target.value;
		props.updateNewPostText(text);
	};

	// button onclick listener callback f() -> calls dispatch f()
	const onAddMyPost = () => props.addMyPost();

	return (
		<div className={styles.wrapper}>
			<div>My post</div>
			<div className={styles.newPost}>
				<textarea
					className={styles.textarea}
					onChange={onPostChange}
					value={props.profilePage.newPostText}
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
