// constants for action types
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MY_POST = "ADD_MY_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

// initial state for first load
const initialState = {
	posts: [
		// мои (?) мессаги в Профиле
		{ id: 1, post: "Hi, how r u?", likes: 15 },
		{ id: 2, post: "it is my 1st post", likes: 20 },
	],
	newPostText: "",
	profile: null,
};

// get state and action, create COPY of STATE!, change it and return new state (if no changes - returns old one)
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		// вызывается в MyPost при изменении value элемента textarea для изменения стейта с последующей переотрисовкой UI
		case UPDATE_NEW_POST_TEXT:
			return { ...state, newPostText: action.newText };

		// вызывается в Profile для добавления поста мессаги в стейт с последующей переотрисовкой UI
		case ADD_MY_POST:
			if (state.newPostText === "") return state;

			const newPost = {
				id: 10,
				post: state.newPostText,
				likes: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: "",
			};

		// принимает типа и profile объект и возвращает новый стейт
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators - to avoid string typing
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addMyPost = () => ({ type: ADD_MY_POST });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
