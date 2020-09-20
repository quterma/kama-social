import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = state => {
	return {
		persons: state.dialogsPage.persons,
		messages: state.dialogsPage.messages,
	};
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
