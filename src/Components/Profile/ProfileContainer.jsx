import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "./../../Redux/profileReducer";
import { withRouter } from "react-router-dom";
import { requestsAPI } from "./../../api/api";

// первый (снизу, с презентационной компоненты) контейнер
class ProfileContainer extends Component {
	// после рендера компоненты (Profile) - делает аякс запрос и передает респонс в функцию setUserProfile
	componentDidMount() {
		// берет параметр в урле и вставляет в юзерайди
		let userId = this.props.match.params.userId;

		// если Profile/ без параметра (начальная загрузка, к примеру), то вставится, к примеру мой (пока хардкод)
		if (!userId) {
			userId = 11610;
		}
		requestsAPI.getProfile(userId).then(data => this.props.setUserProfile(data));
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />;
	}
}

// второй контейнер - берет данный из URL адресной строки и передает дальше
const WithUrlDataContainer = withRouter(ProfileContainer);

// третий (снизу) контейнер (connect) - берет стейт из редакс стора и передает в пропсы дальше
const mapStateToProps = state => ({ profile: state.profilePage.profile });
const mapDispatchToProps = {
	setUserProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);
