const state = {
	profilePage: {
		posts: [
			{ id: 1, post: "Hi, how r u?", likes: 15 },
			{ id: 2, post: "it is my 1st post", likes: 20 },
		],
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
	},
};

export const addMyPost = (post) => {
	const newPost = { id: 10, post: post, likes: 0 };
	state.profilePage.posts.push(newPost);
};

export const addMyMessage = (message) => {
	const newMessage = { id: 10, message: message };
	state.dialogsPage.messages.push(newMessage);
};

export default state;
