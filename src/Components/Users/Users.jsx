import React from "react";
import styles from "./Users.module.css";

//Дем компонента
const Users = props => {
	// временно - для первой загрузки - проверяет, пусто ли в стейте для usersPage и загружает этот объект
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				fullName: "user-1",
				location: {
					country: "Mordor",
					city: "Barad-Dur",
				},
				status: "I like Sauron!",
				avatar: "https://picsum.photos/45",
				isFollowed: false,
			},
			{
				id: 2,
				fullName: "user-2",
				location: {
					country: "Gondor",
					city: "Minas-Tirith",
				},
				status: "Aragorn will prevail!",
				avatar: "https://picsum.photos/46",
				isFollowed: true,
			},
			{
				id: 3,
				fullName: "user-3",
				location: {
					country: "Moria",
					city: "Khazad-Duum",
				},
				status: "A Elbereth... oops... Baruk Khazad!",
				avatar: "https://picsum.photos/47",
				isFollowed: false,
			},
		]);
	}

	return (
		<div className={styles.wrapper}>
			{props.users.map(user => (
				<div key={user.id}>
					<span>
						<div>
							<img src={user.avatar} alt="" />
						</div>
						<div>
							{user.isFollowed ? (
								<button onClick={() => props.unfollow(user.id)}> Unfollow </button>
							) : (
								<button onClick={() => props.follow(user.id)}>Follow</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{user.fullName}</div>
							<div>{user.status}</div>
						</span>
						<span>
							<div>{user.location.country}</div>
							<div>{user.location.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
