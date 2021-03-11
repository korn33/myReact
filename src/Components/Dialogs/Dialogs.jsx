import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import UserMessage from "./UserMessage/UserMessage";

const Dialogs = (props) => {
    const dialogsData = {
        userDialogsComponents: props.dialogs.map(u_d => <DialogItem name={u_d.name} id={u_d.id}  key={u_d.id}/>),
        userMessagesComponents: props.messages.map(u_m => <UserMessage message={u_m.message} key={u_m.id}/>)
    };

    const btnSendClick = () => {
        props.onSendMessage();
    };

    const onChangeNewMessageBody = (e) => {
        const newValue = e.currentTarget.value;
        props.onApdateNewMessageBody(newValue);
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
                <div>
                    <textarea onChange={onChangeNewMessageBody} value={props.newMessageBody}> </textarea>
                </div>
                <div>
                    <button onClick={btnSendClick}>Отправить</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs