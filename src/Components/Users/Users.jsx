import React from "react";
import s from './Users.module.css';
import UserCard from "./UserCard/UserCard";
import axios from "axios";
import avatarDefault from '../../assets/img/avatarDefault.jpg';

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responce => {
                this.props.setUsers(responce.data.items);
            });
    }

    render() {
        return <div>
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