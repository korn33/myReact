import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../Redux/profileReducer";
import axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(responce => {
                this.props.setUserProfile(responce.data);
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