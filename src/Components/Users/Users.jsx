import React, { Component } from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import avatar from "./../../assets/images/ava-2.png";

//Dem Class component
export default class Users extends Component {
	constructor(props) {
		super(props);
		this.onPageChange = this.onPageChange.bind(this);
	}
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChange(pageNumber) {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	render() {
		// const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		const pages = [];
		for (let i = 1; i <= 8; i++) {
			pages.push(i);
		}
		return (
			<div className={styles.wrapper}>
				<div className={styles.pageSelectorsContainer}>
					{pages.map(page => (
						<span
							key={page}
							onClick={() => this.onPageChange(page)}
							className={this.props.currentPage === page ? styles.selectedPage : undefined}
						>
							{page}
						</span>
					))}
				</div>
				{this.props.users.map(user => (
					<div key={user.id}>
						<span>
							<div>
								<img className={styles.avatar} src={user.photos.small != null ? user.photos.small : avatar} alt="" />
							</div>
							<div>
								{user.followed ? (
									<button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
								) : (
									<button onClick={() => this.props.follow(user.id)}>Follow</button>
								)}
							</div>
						</span>
						<span>
							<span>
								<div>{user.name}</div>
								<div>{user.status}</div>
							</span>
							<span>
								<div>{"user.location.country"}</div>
								<div>{"user.location.city"}</div>
							</span>
						</span>
					</div>
				))}
			</div>
		);
	}
}
