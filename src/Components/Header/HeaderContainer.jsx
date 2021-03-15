import React from "react";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/authReducer";
import Header from "./Header";
import axios from "axios";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
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