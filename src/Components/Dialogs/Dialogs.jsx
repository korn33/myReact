import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsSection}>
                <div className={s.dialogItem}>
                    <NavLink to = '/Dialogs/id1' activeClassName={s.active}>Sasha</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to = '/Dialogs/id2' activeClassName={s.active}>Lesha</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to = '/Dialogs/id3' activeClassName={s.active}>Dimon</NavLink>
                </div>
            </div>
            <div className={s.sectionSeparator}>

            </div>
            <div className={s.messagesSection}>
                <div className={s.messageItem}>
                    Yo
                </div>
                <div className={s.messageItem}>
                    Ha Ha
                </div>
                <div className={s.messageItem}>
                    Wats up?
                </div>
            </div>
        </div>
    )
};

export default Dialogs