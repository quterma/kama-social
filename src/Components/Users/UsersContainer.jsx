import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "./../../Redux/usersReducer";

// берет стейт из редакс стора и возвращает ветку newMessageText
const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
	};
};

// берет нужные диспатч методы из редакс стора
const mapDispatchToProps = dispatch => {
	return {
		follow: userId => dispatch(followAC(userId)),
		unfollow: userId => dispatch(unfollowAC(userId)),
		setUsers: users => dispatch(setUsersAC(users)),
	};
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
