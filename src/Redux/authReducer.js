import { profileAPI, authAPI } from "./../api/api";

// constants for action types
const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";

// initial state for first load
const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	photo: null,
};

// get state and action, create COPY of STATE!, change it and return new state (if no changes - returns old one)
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true,
			};

		case SET_USER_PHOTO:
			return {
				...state,
				...action.photo,
			};

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators - to avoid string typing
const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
const setAuthUserPhoto = photo => ({ type: SET_USER_PHOTO, photo });

// thunk creators
export const getAuth = userId => dispatch => {
	authAPI
		.getAuth()
		.then(data => {
			if (data.resultCode === 0) {
				const { id, email, login } = data.data;
				dispatch(setAuthUserData(id, email, login));
			}
		})
		.then(() => profileAPI.getProfile(userId).then(data => dispatch(setAuthUserPhoto(data.photos.small))));
};

export default authReducer;
