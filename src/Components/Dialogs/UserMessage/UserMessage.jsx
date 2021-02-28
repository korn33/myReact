import React from "react";
import s from './UserMessage.module.css';

const UserMessage = (props) => {
    return (
        <div className={s.messageItem}>
            {props.message}
        </div>
    )
};

export default UserMessage