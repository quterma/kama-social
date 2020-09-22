import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "./../../Redux/usersReducer";

// берет стейт из редакс стора и возвращает ветку newMessageText
const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	};
};

// берет нужные диспатч методы из редакс стора
const mapDispatchToProps = dispatch => {
	return {
		follow: userId => dispatch(followAC(userId)),
		unfollow: userId => dispatch(unfollowAC(userId)),
		setUsers: users => dispatch(setUsersAC(users)),
		setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
		setTotalUsersCount: totalCount => dispatch(setTotalUsersCountAC(totalCount)),
	};
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
