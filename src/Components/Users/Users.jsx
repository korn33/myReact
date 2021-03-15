import React from "react";
import s from './Users.module.css';
import UserCard from "./UserCard/UserCard";
import avatarDefault from '../../assets/img/avatarDefault.jpg';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../common/API/Api";

const Users = (props) => {
    return <div>
        <div className={s.paginationViewer}>
            { props.getPagesNumbers().map(pageNumber => {
                return <div
                    className={`${s.pageNumber} ${pageNumber === props.currentPage ? s.currentPage: ''} ${pageNumber === '...' ? s.threeDots : ''}`}
                    onClick={ (e) => { props.onPageNumberClick(e) } }
                    key={pageNumber === '...' ? Math.random() : pageNumber}>
                    {pageNumber}
                </div>
            }) }
        </div>
        {
            props.users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <NavLink to={'/Profile/' + user.id}>
                                <img className={s.avatar}
                                    src={user.photos.small === null ? avatarDefault : user.photos.small}/>
                            </NavLink>
                        </div>
                        {user.followed
                            ? <button onClick={() => {
                                    usersAPI.unFollowUser(user.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unFollow(user.id)
                                                }
                                    });
                            }}>unfollow</button>
                            : <button onClick={() => {
                                usersAPI.followUser(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(user.id)
                                            }
                                    });
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
};

export default Users;