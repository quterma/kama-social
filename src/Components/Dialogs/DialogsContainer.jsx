import { connect } from "react-redux";
import Dialogs from "./Dialogs";

// берет стейт из редакс стора и возвращает ветку persons
const mapStateToProps = state => {
	return {
		persons: state.dialogsPage.persons,
		messages: state.dialogsPage.messages,
	};
};

// передает пропсы (из mapStateToProps) в компоненту Dialogs, и вызывает Dialogs (React-Redux)
const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
