// constants for action types
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MY_MESSAGE = "ADD-MY-MESSAGE";

// get state and action, change state and return new state
const dialogsReducer = (state, action) => {
	switch (action.type) {
		// вызывается в MyMessage при изменении value элемента textarea для отправки в _state и последующего rerender
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return state;

		// вызывается в Dialogs для добавления мессаги, затем вызывает rerender для переотрисовки UI
		case ADD_MY_MESSAGE:
			if (state.newMessageText === "") return;
			const newMessage = {
				id: 10,
				message: state.newMessageText,
			};
			state.messages.push(newMessage);
			state.newMessageText = "";
			return state;

		// if action not matched - return old state
		default:
			return state;
	}
};

export const updateNewMessageTextActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: text,
});

export const addMyMessageActionCreator = () => ({ type: ADD_MY_MESSAGE });

export default dialogsReducer;
