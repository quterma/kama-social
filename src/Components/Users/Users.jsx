import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../assets/images/incognito.png";
import { NavLink } from "react-router-dom";

//Dem component
export const Users = props => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	const pages = [1, 2, 3];
	for (let i = pagesCount - 3; i <= pagesCount; i++) {
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
								<button
									disabled={props.isFollowingInProcess.some(id => id === user.id)}
									onClick={() => props.unfollow(user.id)}
								>
									Unfollow
								</button>
							) : (
								<button
									disabled={props.isFollowingInProcess.some(id => id === user.id)}
									onClick={() => props.follow(user.id)}
								>
									Follow
								</button>
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
