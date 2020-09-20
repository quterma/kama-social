// constants for action types
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MY_POST = "ADD-MY-POST";

// initial state for first load
const initialState = {
	posts: [
		// мои (?) мессаги в Профиле
		{ id: 1, post: "Hi, how r u?", likes: 15 },
		{ id: 2, post: "it is my 1st post", likes: 20 },
	],
	newPostText: "",
};

// get state and action, change state and return new state
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		// вызывается в MyPost при изменении value элемента textarea для отправки в _state и последующего rerender
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		// вызывается в Profile для добавления поста, затем вызывает rerender для переотрисовки UI

		case ADD_MY_POST:
			// if (state.newPostText === "") return;
			const newPost = {
				id: 10,
				post: state.newPostText,
				likes: 0,
			};
			state.posts.push(newPost);
			state.newPostText = "";
			return state;

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators - to avoid string typing
export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export const addMyPostActionCreator = () => ({
	type: ADD_MY_POST,
});

export default profileReducer;
