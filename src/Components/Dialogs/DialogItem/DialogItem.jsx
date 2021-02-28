import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/Dialogs/' + props.id;

    return (
        <div className={s.dialogItem}>
            <img className={s.avatar} src='https://wallpapershome.com/images/pages/ico_h/23164.png'>

            </img>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
};

export default DialogItem