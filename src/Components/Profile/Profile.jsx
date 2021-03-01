import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     updateTextAria={props.updateTextAria}
                     addPost={props.addPost}
            />
        </div>
    )
};

export default Profile