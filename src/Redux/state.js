const state = {
	profilePage: {
		posts: [
			{ id: 1, post: "Hi, how r u?", likes: 15 },
			{ id: 2, post: "it is my 1st post", likes: 20 },
		],
	},
	dialogsPage: {
		persons: [
			{ id: 1, name: "person-1" },
			{ id: 2, name: "person-2" },
			{ id: 3, name: "person-3" },
			{ id: 4, name: "person-4" },
			{ id: 5, name: "person-5" },
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

export default state;
