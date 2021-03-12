import React from "react";
import s from './Users.module.css';
import UserCard from "./UserCard/UserCard";
import axios from "axios";
import avatarDefault from '../../assets/img/avatarDefault.jpg';

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(responce => {
                    props.setUsers(responce.data.items);
                });
        }
    };

    return <div>
        <button onClick={getUsers}>Get users</button>
            {
                props.users.map(user => <div key={user.id}>
                        <div>
                            <div>
                                <img className={s.avatar} src={user.photos.small === null ? avatarDefault : user.photos.small}/>
                            </div>
                            {user.followed
                                ? <button onClick={ () => {props.unFollow(user.id) } }>unfollow</button>
                                : <button onClick={ () => {props.follow(user.id) } }>follow</button> }
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