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
export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const setAuthUserPhoto = photo => ({ type: SET_USER_PHOTO, photo });

export default authReducer;
