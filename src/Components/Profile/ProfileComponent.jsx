import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../common/API/Api";

class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        profileAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

const mapDispatchToProps = {
    setUserProfile
};

const ProfileComponentWithLocationData = withRouter(ProfileComponent);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponentWithLocationData);