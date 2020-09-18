import React from "react";
import MyMessage from "./MyMessage";
import {
	addMyMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../../Redux/dialogsReducer";

const MyMessageContainer = props => {
	const newMessageText = props.store.getState().dialogsPage.newMessageText;

	// textarea onchange listener callback f() -> calls dispatch f() - push chars to BLL
	const onMessageChange = text => {
		props.store.dispatch(updateNewMessageTextActionCreator(text));
	};

	// button onclick listener callback f() -> calls dispatch f()
	const onMyMessageClick = () => {
		props.store.dispatch(addMyMessageActionCreator());
	};

	return (
		<MyMessage
			newMessageText={newMessageText}
			updateNewMessageText={onMessageChange}
			addMyMessage={onMyMessageClick}
		/>
	);
};

export default MyMessageContainer;
