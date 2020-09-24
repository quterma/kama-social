import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../assets/images/ava-2.png";
import { NavLink } from "react-router-dom";

//Dem component
export const Users = props => {
	// const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = [];
	for (let i = 1; i <= 8; i++) {
		pages.push(i);
	}

	return (
		<div className={styles.wrapper}>
			{/* element with page numbers/buttons */}
			<div className={styles.pageSelectorsContainer}>
				{pages.map(page => (
					<span
						key={page}
						onClick={() => props.onPageChanged(page)}
						className={props.currentPage === page ? styles.selectedPage : undefined}
					>
						{page}
					</span>
				))}
			</div>
			{/* mapping users elements */}
			{props.users.map(user => (
				<div key={user.id}>
					<span>
						{/* avatar */}
						<NavLink to={"/Profile/" + user.id}>
							<div>
								<img className={styles.avatar} src={user.photos.small != null ? user.photos.small : avatar} alt="" />
							</div>
						</NavLink>
						{/* button toggler follow/unfollow */}
						<div>
							{user.followed ? (
								<button onClick={() => props.unfollow(user.id)}>Unfollow</button>
							) : (
								<button onClick={() => props.follow(user.id)}>Follow</button>
							)}
						</div>
					</span>
					<span>
						{/* user's name and status */}
						<span>
							<div>{user.name}</div>
							<div>{user.status}</div>
						</span>
						{/* user's location */}
						<span>
							<div>{"user.location.country"}</div>
							<div>{"user.location.city"}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};
