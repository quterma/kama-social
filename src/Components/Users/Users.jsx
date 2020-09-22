import React, { Component } from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import avatar from "./../../assets/images/ava-2.png";

//Dem Class component
export default class Users extends Component {
	componentDidMount() {
		axios
			.get("https://social-network.samuraijs.com/api/1.0/users")
			.then(response => this.props.setUsers(response.data.items));
	}

	render() {
		return (
			<div className="wrapper">
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
