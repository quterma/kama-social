import React, { Component } from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, getUsers } from "../../Redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../Common/Preloader/Preloader";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

// Class component - container for ajax requests
class UsersApiComponent extends Component {
	constructor(props) {
		super(props);
		this.onPageChanged = this.onPageChanged.bind(this);
	}
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged(pageNumber) {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		if (this.props.isFetching) {
			return <Preloader />;
		}

		return (
			<>
				{/* {this.props.isFetching && <Preloader />} */}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					users={this.props.users}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					onPageChanged={this.onPageChanged}
					isFollowingInProcess={this.props.isFollowingInProcess}
				/>
			</>
		);
	}
}

// берет стейт из редакс стора и возвращает ветку newMessageText
const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFollowingInProcess: state.usersPage.isFollowingInProcess,
	};
};

// берет нужные диспатч методы из редакс стора
const mapDispatchToProps = {
	follow,
	unfollow,
	setCurrentPage,
	getUsers,
};

// HOCing for redirect
const AuthRedirectComponent = withAuthRedirect(UsersApiComponent);

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
