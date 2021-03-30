import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getUserStatus, updateUserStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 15760;
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
};

const mapDispatchToProps = {
    getProfile,
    getUserStatus,
    updateUserStatus,
};

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileComponent);