import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import UserMessage from "./UserMessage/UserMessage";

const Dialogs = (props) => {
    const dialogsData = {
        userDialogsComponents: props.state.dialogs.map(u_d => <DialogItem name={u_d.name} id={u_d.id}/>),
        userMessagesComponents: props.state.messages.map(u_m => <UserMessage message={u_m.message}/>)
    };
    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsSection}>
                {dialogsData.userDialogsComponents}
            </div>

            <div className={s.sectionSeparator}>

            </div>

            <div className={s.messagesSection}>
                {dialogsData.userMessagesComponents}
            </div>
        </div>
    )
};

export default Dialogs