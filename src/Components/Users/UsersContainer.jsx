import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, getUsersCountAC, setCurrentPageAC, setUsersAC, unFollowAC} from "../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
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
        },
        getUsersCount: (count) => {
            const action = getUsersCountAC(count);
            dispatch(action);
        },
        setCurrentPage: (pageNumber) => {
            const action = setCurrentPageAC(pageNumber);
            dispatch(action);
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;