import MyMessage from "./MyMessage";
import {
	addMyMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../../Redux/dialogsReducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		newMessageText: state.dialogsPage.newMessageText,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateNewMessageText: text => {
			dispatch(updateNewMessageTextActionCreator(text));
		},
		addMyMessage: () => {
			dispatch(addMyMessageActionCreator());
		},
	};
};

const MyMessageContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MyMessage);

export default MyMessageContainer;
