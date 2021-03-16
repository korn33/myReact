import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const WithAuthRedirect = (Component) => {
    class WithRedirect extends React.Component {
        render() {
            if (this.props.isAuth === false) return <Redirect to={'/Login'}/>;
            return <Component/>
        }
    }
    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    };
    return connect(mapStateToProps)(WithRedirect);
};