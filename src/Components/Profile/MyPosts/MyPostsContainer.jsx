import MyPosts from "./MyPosts";
import {
	addMyPostActionCreator,
	updateNewPostTextActionCreator,
} from "../../../Redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateNewPostText: text => {
			dispatch(updateNewPostTextActionCreator(text));
		},
		addMyPost: () => {
			dispatch(addMyPostActionCreator());
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
