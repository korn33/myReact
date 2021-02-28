import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileHeader}>
            </div>
            <div className={s.profileInfo}>
                ava+description
            </div>
        </div>
    )
};

export default ProfileInfo