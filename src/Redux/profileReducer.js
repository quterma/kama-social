import { profileAPI } from "./../api/api";

// constants for action types
const ADD_MY_POST = "ADD_MY_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

// initial state for first load
const initialState = {
	posts: [
		// мои (?) мессаги в Профиле
		{ id: 1, post: "Hi, how r u?", likes: 15 },
		{ id: 2, post: "it is my 1st post", likes: 20 },
	],
	profile: null,
	status: "",
};

// get state and action, create COPY of STATE!, change it and return new state (if no changes - returns old one)
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MY_POST:
			if (action.newPostText === "") return state;

			const newPost = {
				id: 10,
				post: action.newPostText,
				likes: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };

		case SET_STATUS:
			return { ...state, status: action.status };

		case DELETE_POST:
			return { ...state, posts: state.posts.filter(post => post.id !== action.postId) };

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators - to avoid string typing
export const addMyPostAC = newPostText => ({ type: ADD_MY_POST, newPostText });
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
const setStatus = status => ({ type: SET_STATUS, status });
export const deletePost = postId => ({ type: DELETE_POST, postId });

// thunk creators
export const getUserProfile = userId => dispatch => {
	profileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)));
};
export const getStatus = userId => dispatch => {
	profileAPI.getStatus(userId).then(data => dispatch(setStatus(data)));
};
export const updateStatus = status => dispatch => {
	profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	});
};

export default profileReducer;
