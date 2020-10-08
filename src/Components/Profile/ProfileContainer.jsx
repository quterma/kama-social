import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "./../../Redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";
import { Preloader } from "./../Common/Preloader/Preloader";

// первый (снизу, с презентационной компоненты) контейнер
class ProfileContainer extends Component {
	// после рендера компоненты (Profile) - делает аякс запрос и передает респонс в функцию setUserProfile
	componentDidMount() {
		// берет параметр в урле и вставляет в юзерайди
		let userId = this.props.match.params.userId;
		// если Profile/ без параметра (начальная загрузка, к примеру), то вставится, к примеру мой (пока хардкод)
		if (!userId) {
			// 11610
			userId = this.props.id;
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		if (!this.props.profile) return <Preloader />;
		return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
	}
}

const mstp = state => ({ profile: state.profilePage.profile, status: state.profilePage.status, id: state.auth.id });
const mdtp = { getUserProfile, getStatus, updateStatus };

// compose (from redux) объединяет несколько Хоков и прочих надстроек - аргументы в обратной очередности от вызова
export default compose(connect(mstp, mdtp), withRouter, withAuthRedirect)(ProfileContainer);
