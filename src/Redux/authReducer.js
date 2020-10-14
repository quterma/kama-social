import { profileAPI, authAPI } from "./../api/api";

// constants for action types
const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const SET_ERROR = "SET_ERROR";

// initial state for first load
const initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	photo: null,
	error: null,
};

// get state and action, create COPY of STATE!, change it and return new state (if no changes - returns old one)
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return { ...state, ...action.payload };

		case SET_USER_PHOTO:
			return { ...state, ...action };

		case SET_ERROR:
			return { ...state, ...action };

		// if action not matched - return old state
		default:
			return state;
	}
};

// action creators - to avoid string typing
const setAuthUserData = (id, email, login, isAuth, error) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth, error } });
const setAuthUserPhoto = photo => ({ type: SET_USER_PHOTO, photo });
const setError = error => ({ type: SET_ERROR, error });

// thunk creators
export const getAuth = () => async dispatch => {
	const data = await authAPI.getAuth();
	if (data.resultCode === 0) {
		const { id, email, login } = data.data;
		dispatch(setAuthUserData(id, email, login, true, null));
		const request = await profileAPI.getProfile(id);
		dispatch(setAuthUserPhoto(request.photos.small));
	}
};

export const login = (login, password, rememberMe) => async dispatch => {
	const request = await authAPI.login(login, password, rememberMe);
	if (request.data.resultCode === 0) {
		dispatch(getAuth(request.data.userId));
	} else {
		dispatch(setError(request.data.messages[0]));
	}
};
export const logout = () => async dispatch => {
	const request = await authAPI.logout();
	if (request.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false, null));
	}
};

export default authReducer;
