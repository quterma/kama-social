// переменная с заглушкой, в которую присвоится ререндер из index.js при необходимости отререндерить из state.js
let rerenderEntireTree = () => {
	console.log("htis one will be changed on rerender from index.js");
};

const state = {
	// глобальный стейт
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
};

// вызывается в Profile для добавления поста, затем вызывает rerender для переотрисовки UI
export const addMyPost = () => {
	if (state.profilePage.newPostText === "") return;
	const newPost = { id: 10, post: state.profilePage.newPostText, likes: 0 };
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = "";
	rerenderEntireTree(state);
};

// вызывается в MyPost при изменении value элемента textarea для отправки в state и последующего rerender
export const updateNewPostText = (text) => {
	state.profilePage.newPostText = text;
	rerenderEntireTree(state);
};

// вызывается в Dialogs для добавления мессаги, затем вызывает rerender для переотрисовки UI
export const addMyMessage = () => {
	if (state.dialogsPage.newMessageText === "") return;
	const newMessage = { id: 10, message: state.dialogsPage.newMessageText };
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = "";
	rerenderEntireTree(state);
};

// вызывается в MyMessage при изменении value элемента textarea для отправки в state и последующего rerender
export const updateNewMessageText = (text) => {
	state.dialogsPage.newMessageText = text;
	rerenderEntireTree(state);
};

// функция для экспорта и вызова в index.js для обратного "пересылания" ререндера в state.js
// это PATTERN
export const subscribe = (observer) => {
	rerenderEntireTree = observer;
};

export default state;
