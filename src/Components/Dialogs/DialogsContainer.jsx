import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onApdateNewMessageBody: (text) => {
            const action = updateNewMessageBodyCreator(text);
            dispatch(action);
        },
        onSendMessage: () => {
            const action = sendMessageCreator();
            dispatch(action);
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;