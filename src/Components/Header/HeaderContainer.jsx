import React from "react";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/authReducer";
import Header from "./Header";
import axios from "axios";
import {SERVER_URL} from "../../MainConstants";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`${SERVER_URL}/auth/me`, {
            withCredentials: true,
        })
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    const {id, email, login} = responce.data.data;
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