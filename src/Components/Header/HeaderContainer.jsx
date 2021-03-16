import React from "react";
import {connect} from "react-redux";
import {getUser} from "../../Redux/authReducer";
import Header from "./Header";
import {compose} from "redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getUser();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

const mapDispatchToProps = {
    getUser,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(HeaderContainer);