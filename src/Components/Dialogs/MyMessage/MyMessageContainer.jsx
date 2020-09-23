import MyMessage from "./MyMessage";
import { addMyMessage, updateNewMessageText } from "../../../Redux/dialogsReducer";
import { connect } from "react-redux";

// берет стейт из редакс стора и возвращает ветку newMessageText
const mapStateToProps = state => {
	return {
		newMessageText: state.dialogsPage.newMessageText,
	};
};

// берет нужные диспатч методы из редакс стора
const mapDispatchToProps = {
	updateNewMessageText,
	addMyMessage,
};

// передает пропсы (из mapStateToProps) в компоненту MyMessage, и вызывает MyMessage (React-Redux)
const MyMessageContainer = connect(mapStateToProps, mapDispatchToProps)(MyMessage);

export default MyMessageContainer;
