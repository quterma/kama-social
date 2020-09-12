import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { addMyMessage, addMyPost } from "./Redux/state"; // пока оставлен импорт (некая цикличность)

// добавленный файл для убирания цикличности импорта
export const rerenderEntireTree = (state) => {
	// рендерит App с пропсами (объект state из ./Redux/state.js)
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addMyPost={addMyPost} addMyMessage={addMyMessage} />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById("root")
	);
};
