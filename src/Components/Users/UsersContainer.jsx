import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    unFollow,
    getUsers
} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import s from './Users.module.css';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
        this.props.getUsers(page, this.props.pageSize);
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
                toggleChangeFollowingInProgress={this.props.toggleChangeFollowingInProgress}
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
        toggleChangeFollowingInProgress: state.usersPage.toggleChangeFollowingInProgress,
    }
};

const mapDispatchToProps = {
        follow,
        unFollow,
        setCurrentPage,
        getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);