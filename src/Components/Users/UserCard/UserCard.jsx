import React from "react";
import s from "./UserCard.module.css";

const UserCard = (props) => {
    return (
        <div className={s.userCard}>
            <div>аватар и кнопка</div>
            <div>инфо</div>
        </div>
    )
};

export default UserCard;