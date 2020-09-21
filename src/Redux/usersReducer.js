// constants for action types
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

// initial state for first load
const initialState = {
	users: [
		// {
		// 	id: 1,
		// 	fullName: "user-1",
		// 	location: {
		// 		country: "Mordor",
		// 		city: "Barad-Dur",
		// 	},
		// 	status: "I like Sauron!",
		// 	avatar: "https://picsum.photos/45",
		// 	isFollowed: false,
		// },
		// {
		// 	id: 2,
		// 	fullName: "user-2",
		// 	location: {
		// 		country: "Gondor",
		// 		city: "Minas-Tirith",
		// 	},
		// 	status: "Aragorn will prevail!",
		// 	avatar: "https://picsum.photos/46",
		// 	isFollowed: true,
		// },
		// {
		// 	id: 3,
		// 	fullName: "user-3",
		// 	location: {
		// 		country: "Moria",
		// 		city: "Khazad-Duum",
		// 	},
		// 	status: "A Elbereth... oops... Baruk Khazad!",
		// 	avatar: "https://picsum.photos/47",
		// 	isFollowed: false,
		// },
	],
};

// get state and action, create COPY of STATE!, change it and return new state (if no changes - returns old one)
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		// reducer for follow button
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => (user.id === action.userId ? { ...user, isFollowed: true } : user)),
			};

		// reducer for unfollow button
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => (user.id === action.userId ? { ...user, isFollowed: false } : user)),
			};

		// reducer for setting users on page
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] };

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators - to avoid string typing
export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
