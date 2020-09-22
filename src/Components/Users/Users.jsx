import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import avatar from "./../../assets/images/ava-2.png";

//Дем компонента
const Users = props => {
	// временно - для первой загрузки - проверяет, пусто ли в стейте для usersPage и загружает этот объект
	const getUsers = () => {
		if (props.users.length === 0) {
			// get requiest for users json
			axios
				.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => props.setUsers(response.data.items));
		}
	};

	// формирует массив из юзерз элементов)
	const usersElements = props.users.map(user => (
		<div key={user.id}>
			<span>
				<div>
					<img className={styles.avatar} src={user.photos.small != null ? user.photos.small : avatar} alt="" />
				</div>
				<div>
					{user.followed ? (
						<button onClick={() => props.unfollow(user.id)}>Unfollow</button>
					) : (
						<button onClick={() => props.follow(user.id)}>Follow</button>
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
	));

	return (
		<div className="wrapper">
			<button onClick={getUsers}>get users</button>
			<div className="container">{usersElements}</div>
		</div>
	);
};

export default Users;
