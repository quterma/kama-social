import React, { Component } from "react";
import styles from "./ProfileStatus.module.css";

class ProfileStatus extends Component {
	constructor(props) {
		super(props);
		this.state = { editMode: false, status: this.props.status };
		this.toggleEditMode = this.toggleEditMode.bind(this);
		this.onStatusChange = this.onStatusChange.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status });
		}
	}

	toggleEditMode() {
		this.setState({ editMode: !this.state.editMode });
		this.props.updateStatus(this.state.status);
	}

	onStatusChange(event) {
		this.setState({ status: event.currentTarget.value });
	}

	render() {
		return (
			<div>
				{!this.state.editMode ? (
					<div onDoubleClick={this.toggleEditMode} className={styles.status}>
						Status: {this.props.status}
					</div>
				) : (
					<input
						autoFocus={true}
						onBlur={this.toggleEditMode}
						className={styles.input}
						onChange={this.onStatusChange}
						value={this.state.status}
					/>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
