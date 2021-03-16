import React from "react";
import s from './Login.module.css';

const Login = (props) => {
    return (
        <h1 className={s.message}>Need <a href={'https://social-network.samuraijs.com'} target="_blank">sign in</a></h1>
    )
};

export default Login;