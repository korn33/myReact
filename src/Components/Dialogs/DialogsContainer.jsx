import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const updateNewMessage = (text) => {
        const action = updateNewMessageBodyCreator(text);
        props.store.dispatch(action);
    };

    const sendMessage = () => {
        const action = sendMessageCreator();
        props.store.dispatch(action);
    };

    return (
        <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageBody={state.newMessageBody}

            onApdateNewMessageBody={updateNewMessage}
            onSendMessage={sendMessage}
        />
    )
};

export default DialogsContainer;