import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div>
			<img
				src="https://image.shutterstock.com/image-vector/wide-space-image-260nw-1129045574.jpg"
				className={styles.image}
				alt="sea"
			/>
			<div>
				<img
					className={styles.avatar}
					alt="avatar"
					src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
				/>
				<div className={styles.description}>description</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
