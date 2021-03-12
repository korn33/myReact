import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            const action = followAC(userId);
            dispatch(action);
        },
        unFollow: (userId) => {
            const action = unFollowAC(userId);
            dispatch(action);
        },
        setUsers:(users) => {
            const action = setUsersAC(users);
            dispatch(action);
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;