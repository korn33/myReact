import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import UserMessage from "./UserMessage/UserMessage";
import {ErrorMessage, Field, Form, Formik} from "formik";

const NewMessageForm = (props) => {
    return (
        <Formik
            initialValues={{
                newMessageBody: '',
            }}
            onSubmit={values => {
                props.onSubmit(values.newMessageBody);
            }}
        >
            <Form>
                <div>
                    <Field name="newMessageBody" type="text"/>
                    <ErrorMessage name="newMessageBody"/>
                </div>
                <button type="submit">Send message</button>
            </Form>
        </Formik>
    );
};

const Dialogs = (props) => {
    const dialogsData = {
        userDialogsComponents: props.dialogs.map(u_d => <DialogItem name={u_d.name} id={u_d.id}  key={u_d.id}/>),
        userMessagesComponents: props.messages.map(u_m => <UserMessage message={u_m.message} key={u_m.id}/>)
    };

    const btnSendClick = (newMessageBody) => {
        props.onSendMessage(newMessageBody);
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
                <NewMessageForm onSubmit={btnSendClick}/>
            </div>
        </div>
    )
};

export default Dialogs