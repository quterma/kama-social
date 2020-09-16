import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
});
const store = createStore(reducers);

export default store;
