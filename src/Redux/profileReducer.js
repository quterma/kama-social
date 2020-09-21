// constants for action types
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MY_POST = "ADD_MY_POST";

// initial state for first load
const initialState = {
	posts: [
		// мои (?) мессаги в Профиле
		{ id: 1, post: "Hi, how r u?", likes: 15 },
		{ id: 2, post: "it is my 1st post", likes: 20 },
	],
	newPostText: "",
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

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators - to avoid string typing
export const updateNewPostTextAC = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export const addMyPostAC = () => ({ type: ADD_MY_POST });

export default profileReducer;
