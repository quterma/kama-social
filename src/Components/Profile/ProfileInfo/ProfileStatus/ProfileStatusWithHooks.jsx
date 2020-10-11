import React, { useState } from "react";
import styles from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = props => {

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);
	const activateEditMode = () => setEditMode(true);
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}
	const onStatusChange = (event) => {
		setStatus(event.currentTarget.value);
	}
		return (
			<div>
				{ !editMode &&
					<div onDoubleClick={activateEditMode} className={styles.status}>
						Status: {props.status}
					</div>}
				{editMode && (
					<input
						autoFocus={true}
						className={styles.input}
						onBlur={deactivateEditMode}
						onChange={onStatusChange}
						value={status}
					/>
				)}
			</div>
		);
}

export default ProfileStatusWithHooks;
