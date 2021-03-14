import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    getUsersCountAC,
    setCurrentPageAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC
} from "../../Redux/usersReducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import s from './Users.module.css';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items);
                this.props.getUsersCount(responce.data.totalCount);
            });
    }

    getPagesNumbers = () => {
        let pagesNumbers = [];
        const countPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const currentPage = this.props.currentPage;
        switch (true) {
            case currentPage <= 5: {
                for (let i = 1; i <= currentPage + 3; i++) {
                    pagesNumbers.push(i);
                }
                pagesNumbers.push('...');
                pagesNumbers.push(countPages);
                break;
            }
            case ((currentPage >= 6) && (currentPage <= countPages - 4)): {
                pagesNumbers.push(1);
                pagesNumbers.push('...');
                for (let i = currentPage - 3; i <= currentPage + 3; i++) {
                    pagesNumbers.push(i);
                }
                pagesNumbers.push('...');
                pagesNumbers.push(countPages);
                break;
            }
            case currentPage >= countPages - 4 : {
                pagesNumbers.push(1);
                pagesNumbers.push('...');
                for (let i = currentPage - 3; i <= countPages; i++) {
                    pagesNumbers.push(i);
                }
                break;
            }
            default:
                break;
        }
        return pagesNumbers;
    };

    onPageNumberClick = (e) => {
        if (e.currentTarget.textContent !== '...') {
            const pageNumber = Number(e.currentTarget.textContent);
            this._setPage(pageNumber);
        }
    };

    _setPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items);
            });
    };

    render() {
        return <>
            {this.props.isFetching ? <div className={s.preloader}> <Preloader/> </div>: null}
            <Users
                getPagesNumbers={this.getPagesNumbers}
                onPageNumberClick={this.onPageNumberClick}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                users={this.props.users}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        setUsers: (users) => {
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
        },
        toggleIsFetching: (isFetching) => {
            const action = toggleIsFetchingAC(isFetching);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);