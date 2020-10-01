import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

// берет стейт из редакс стора и возвращает ветку persons
const mstp = state => {
	return {
		persons: state.dialogsPage.persons,
		messages: state.dialogsPage.messages,
	};
};

// HOCing for redirect
const AuthRedirectComponent = withAuthRedirect(Dialogs);

// передает пропсы (из mapStateToProps) в компоненту Dialogs, и вызывает Dialogs (React-Redux)
const DialogsContainer = connect(mstp)(AuthRedirectComponent);

export default DialogsContainer;
