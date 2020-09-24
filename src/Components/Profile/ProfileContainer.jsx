import React, { Component } from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "./../../Redux/profileReducer";

class ProfileContainer extends Component {
	componentDidMount() {
		// this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
			// this.props.toggleIsFetching(false);
			this.props.setUserProfile(response.data);
		});
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		);
	}
}

const mapStateToProps = state => ({ profile: state.profilePage.profile });
const mapDispatchToProps = {
	setUserProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
