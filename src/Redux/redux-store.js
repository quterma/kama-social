import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

// соединяет наши редьюсеры (см импорт) с создаваемым с помощь редакса стором
const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
});

// создает стор, передавая ему редьюсеры и applyMiddleware (layer for thunks)
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
