import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const posts = [
	{ id: 1, post: "Hi, how r u?", likes: 15 },
	{ id: 2, post: "it is my 1st post", likes: 20 },
];

const persons = [
	{ id: 1, name: "person-1" },
	{ id: 2, name: "person-2" },
	{ id: 3, name: "person-3" },
	{ id: 4, name: "person-4" },
	{ id: 5, name: "person-5" },
];

const messages = [
	{ id: 1, message: "Hi !" },
	{ id: 2, message: "How are you?" },
	{ id: 3, message: "Yo !" },
	{ id: 4, message: "Yo" },
	{ id: 5, message: "Yo" },
];

ReactDOM.render(
	<React.StrictMode>
		<App posts={posts} persons={persons} messages={messages} />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
