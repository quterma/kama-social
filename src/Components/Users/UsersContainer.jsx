import React, { Component } from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, getUsers } from "../../Redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from "../Common/Preloader/Preloader";
import { compose } from "redux";

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
const mstp = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFollowingInProcess: state.usersPage.isFollowingInProcess,
	};
};

// берет нужные диспатч методы из редакс стора
const mdtp = {
	follow,
	unfollow,
	setCurrentPage,
	getUsers,
};

// compose (from redux) объединяет несколько Хоков и прочих надстроек - аргументы в обратной очередности от вызова
export default compose(connect(mstp, mdtp))(UsersApiComponent);
