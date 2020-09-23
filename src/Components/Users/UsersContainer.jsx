import React, { Component } from "react";
import { connect } from "react-redux";
import {
	followAC,
	unfollowAC,
	setUsersAC,
	setCurrentPageAC,
	setTotalUsersCountAC,
	toggleIsFetchingAC,
} from "./../../Redux/usersReducer";
import * as axios from "axios";
import { Users } from "./Users";
import { Fetching } from "./../Fetching/Fetching";

// Class component - container for ajax requests
class UsersApiComponent extends Component {
	constructor(props) {
		super(props);
		this.onPageChanged = this.onPageChanged.bind(this);
	}
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged(pageNumber) {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	render() {
		return (
			<>
				{this.props.isFetching && <Fetching />}
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
const mapDispatchToProps = dispatch => {
	return {
		follow: userId => dispatch(followAC(userId)),
		unfollow: userId => dispatch(unfollowAC(userId)),
		setUsers: users => dispatch(setUsersAC(users)),
		setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
		setTotalUsersCount: totalCount => dispatch(setTotalUsersCountAC(totalCount)),
		toggleIsFetching: isFetching => dispatch(toggleIsFetchingAC(isFetching)),
	};
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);
