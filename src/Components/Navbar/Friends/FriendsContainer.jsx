import { connect } from "react-redux";
import Friends from "./Friends";

const mapStateToProps = state => {
	return {
		persons: state.dialogsPage.persons,
	};
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
