import React, { Component } from "react";
import { connect } from "react-redux";
import {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
} from "../../Redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../Common/Preloader/Preloader";
import { requestsAPI } from "./../../api/api";

// Class component - container for ajax requests
class UsersApiComponent extends Component {
	constructor(props) {
		super(props);
		this.onPageChanged = this.onPageChanged.bind(this);
	}
	componentDidMount() {
		this.props.toggleIsFetching(true);
		requestsAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
	}

	onPageChanged(pageNumber) {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		requestsAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		});
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
		isFetching: state.usersPage.isFetching,
	};
};

// берет нужные диспатч методы из редакс стора
const mapDispatchToProps = {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);
