import React from "react";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/authReducer";
import Header from "./Header";
import {authAPI} from "../common/API/Api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        authAPI.getUserData()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    this.props.setUserData(id, email, login);
                }
            })
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
    setUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);