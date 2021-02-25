import React from "react";
import s from './Header.module.css'

const Header = () => {
    return <header className={s.header}>
        <img className={s.App_logo} src='logo192.png'/>
    </header>
};

export default Header