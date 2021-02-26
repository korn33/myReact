import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.profileHeader}>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile