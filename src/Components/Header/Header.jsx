import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img className={s.App_logo} src='logo192.png'/>
        <div className={s.loginBlock}>
            <NavLink to='/Login'>{props.isAuth ? props.login : 'Login'}</NavLink>
        </div>
    </header>
};

export default Header