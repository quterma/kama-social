import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import state, {
	subscribe,
	addMyMessage,
	addMyPost,
	updateNewMessageText,
	updateNewPostText,
} from "./Redux/state";

// рендерит App с пропсами (объект state из ./Redux/state.js)
const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addMyPost={addMyPost}
					addMyMessage={addMyMessage}
					updateNewPostText={updateNewPostText}
					updateNewMessageText={updateNewMessageText}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById("root")
	);
};

// импортирует вызывает rerender с передачей стейта для последующей передачи стейта в пропсы
rerenderEntireTree(state);

// вызывает импортированную из стейта функцию для передачи в стейт ререндера
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
