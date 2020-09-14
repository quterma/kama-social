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
		// вызывается в Profile для добавления поста, затем вызывает rerender для переотрисовки UI
		if (action.type === "ADD-MY-POST") {
			if (this._state.profilePage.newPostText === "") return;
			const newPost = {
				id: 10,
				post: this._state.profilePage.newPostText,
				likes: 0,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = "";
			this._callSubscriber(this._state);

			// вызывается в MyPost при изменении value элемента textarea для отправки в _state и последующего rerender
		} else if (action.type === "UPDATE-NEW-POST-TEXT") {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);

			// вызывается в Dialogs для добавления мессаги, затем вызывает rerender для переотрисовки UI
		} else if (action.type === "ADD-MY-MESSAGE") {
			if (this._state.dialogsPage.newMessageText === "") return;
			const newMessage = {
				id: 10,
				message: this._state.dialogsPage.newMessageText,
			};
			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageText = "";
			this._callSubscriber(this._state);

			// вызывается в MyMessage при изменении value элемента textarea для отправки в _state и последующего rerender
		} else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
			this._state.dialogsPage.newMessageText = action.newText;
			this._callSubscriber(this._state);
		}
	},
};

export default store;
