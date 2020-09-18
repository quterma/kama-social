import React from "react";
import MyPosts from "./MyPosts";
import {
	addMyPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../Redux/profileReducer";

const MyPostsContainer = props => {
	const profilePage = props.store.getState().profilePage;

	// textarea onchange listener callback f() -> calls dispatch f() - push chars to BLL
	const onPostChange = text => {
		props.store.dispatch(updateNewPostTextActionCreator(text));
	};

	// button onclick listener callback f() -> calls dispatch f()
	const onAddMyPost = () => {
		props.store.dispatch(addMyPostActionCreator());
	};

	return (
		<MyPosts
			updateNewPostText={onPostChange}
			addMyPost={onAddMyPost}
			profilePage={profilePage}
		/>
	);
};

export default MyPostsContainer;
