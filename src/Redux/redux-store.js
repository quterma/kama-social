import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

// соединяет наши редьюсеры (см импорт) с создаваемым с помощь редакса стором
const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
});

// создает стор, передавая ему редьюсеры
const store = createStore(reducers);

export default store;
