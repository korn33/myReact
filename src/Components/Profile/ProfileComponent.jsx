import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getProfile(userId);
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
    getProfile
};

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileComponent);