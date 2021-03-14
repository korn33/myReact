import React from "react";
import s from './Users.module.css';
import UserCard from "./UserCard/UserCard";
import axios from "axios";
import avatarDefault from '../../assets/img/avatarDefault.jpg';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                this.props.setUsers(responce.data.items);
                this.props.getUsersCount(responce.data.totalCount);
            });
    }

    getPagesNumbers = () => {
        let pagesNumbers = [];
        const countPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const currentPage = this.props.currentPage;
        switch (true) {
            case currentPage <= 5:
            {
                for (let i = 1; i <= currentPage + 3; i++) {
                    pagesNumbers.push(i);
                }
                pagesNumbers.push('...');
                pagesNumbers.push(countPages);
                break;
            }
            case ( (currentPage >= 6) && (currentPage <= countPages - 4) ): {
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
            default: break;
        }
        return pagesNumbers;
    };

    onPageNumberClick = (e) => {
        if (e.currentTarget.textContent !== '...') {
            this.props.setCurrentPage(e.currentTarget.textContent);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${e.currentTarget.textContent}&count=${this.props.pageSize}`)
                .then(responce => {
                    this.props.setUsers(responce.data.items);
                });
        }
    };

    render() {
        return <div>
            <div className={s.paginationViewer}>
                { this.getPagesNumbers().map(pageNumber => {
                    return <div
                            className={`${s.pageNumber}
                                    ${pageNumber === this.props.currentPage && s.currentPage}
                                    ${pageNumber === '...' && s.threeDots}`}
                            onClick={ (e) => { this.onPageNumberClick(e) } }
                            key={pageNumber === '...' ? Math.random() : pageNumber}>
                            {pageNumber}
                            </div>
                }) }
            </div>
            {
                this.props.users.map(user => <div key={user.id}>
                        <div>
                            <div>
                                <img className={s.avatar}
                                     src={user.photos.small === null ? avatarDefault : user.photos.small}/>
                            </div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(user.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>follow</button>}
                        </div>
                        <div>
                            <div>{user.name}</div>
                            <div>{'user.location.country'} {'user.location.city'}</div>
                        </div>
                    </div>
                )
            }
        </div>
    }
}

export default Users;