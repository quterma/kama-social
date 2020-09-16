import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

// selfmade redux object (temporary)
const store = {
	_state: {
		profilePage: {
			posts: [
				// мои (?) мессаги в Профиле
				{ id: 1, post: "Hi, how r u?", likes: 15 },
				{ id: 2, post: "it is my 1st post", likes: 20 },
			],
			newPostText: "",
		},
		dialogsPage: {
			persons: [
				{
					id: 1,
					name: "person-1",
					avatar: "https://picsum.photos/45",
					isFriend: false,
				},
				{
					id: 2,
					name: "person-2",
					avatar: "https://picsum.photos/46",
					isFriend: true,
				},
				{
					id: 3,
					name: "person-3",
					avatar: "https://picsum.photos/47",
					isFriend: true,
				},
				{
					id: 4,
					name: "person-4",
					avatar: "https://picsum.photos/48",
					isFriend: false,
				},
				{
					id: 5,
					name: "person-5",
					avatar: "https://picsum.photos/49",
					isFriend: true,
				},
			],
			messages: [
				{ id: 1, message: "Hi !" },
				{ id: 2, message: "How are you?" },
				{ id: 3, message: "Yo !" },
				{ id: 4, message: "Yo" },
				{ id: 5, message: "Yo" },
			],
			newMessageText: "",
		},
	},

	// функция с заглушкой, в которую присвоится ререндер из index.js при необходимости отререндерить из state.js
	_callSubscriber() {
		console.log("plug");
	},

	// getter for this._state
	getState() {
		return this._state;
	},

	// метод для экспорта и вызова в index.js для обратного "пересылания" ререндера в state.js
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		// calls reducers for necessary changes in state and renew state
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		// calls subscribers - functions depends of changes in state
		this._callSubscriber(this._state);
	},
};

export default store;
