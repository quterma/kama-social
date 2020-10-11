import { usersAPI } from "./../api/api";

// constants for action types
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

// initial state for first load
const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	isFollowingInProcess: [],
};

// get state and action, create COPY of STATE!, change it and return new state (if no changes - returns old one)
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		// reducer for follow button
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => (user.id === action.userId ? { ...user, followed: true } : user)),
			};

		// reducer for unfollow button
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => (user.id === action.userId ? { ...user, followed: false } : user)),
			};

		// reducer for setting users on page
		case SET_USERS:
			return { ...state, users: action.users };

		// reducer for setting current page
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage };

		// reducer for setting totalUsersCount
		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalUsersCount: action.count };

		// for toggle isFetching
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching };

		// for toggle isFetching
		case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				isFollowingInProcess: action.isFetching
					? [...state.isFollowingInProcess, action.userId]
					: state.isFollowingInProcess.filter(id => id !== action.userId),
			};

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators - to avoid string typing
const followAC = userId => ({ type: FOLLOW, userId });
const unfollowAC = userId => ({ type: UNFOLLOW, userId });
const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
const toggleIsFollowingInProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
	isFetching,
	userId,
});

// thunk creators
export const getUsersThunk = (page, pageSize) => {
	return dispatch => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUsers(page, pageSize).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setCurrentPage(page));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
	};
};
export const follow = userId => {
	return dispatch => {
		dispatch(toggleIsFollowingInProgress(true, userId));
		usersAPI.follow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followAC(userId));
			}
			dispatch(toggleIsFollowingInProgress(false, userId));
		});
	};
};
export const unfollow = userId => {
	return dispatch => {
		dispatch(toggleIsFollowingInProgress(true, userId));
		usersAPI.unfollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowAC(userId));
			}
			dispatch(toggleIsFollowingInProgress(false, userId));
		});
	};
};

export default usersReducer;
