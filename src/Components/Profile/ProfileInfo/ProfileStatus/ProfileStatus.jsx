import React, { Component } from "react";
import styles from "./ProfileStatus.module.css";

class ProfileStatus extends Component {
	constructor(props) {
		super(props);
		this.state = { editMode: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({ editMode: !state.editMode }));
	}

	render() {
		const text = this.props.aboutMe ? this.props.aboutMe : "test note";

		return (
			<div>
				{!this.state.editMode ? (
					<div onDoubleClick={this.handleClick} className={styles.aboutMe}>
						{text}
					</div>
				) : (
					<input autoFocus={true} onBlur={this.handleClick} className={styles.input} value={text} />
				)}
			</div>
		);
	}
}

export default ProfileStatus;
