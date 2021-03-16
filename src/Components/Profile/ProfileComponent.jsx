import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile} from "../../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getProfile(userId);
    }

    render() {
        if (this.props.isAuth === false) return <Redirect to={'/Login'}/>;
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
};

const mapDispatchToProps = {
    getProfile
};

const ProfileComponentWithLocationData = withRouter(ProfileComponent);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponentWithLocationData);