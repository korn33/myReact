import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (newMessageBody) => {
            const action = sendMessageCreator(newMessageBody);
            dispatch(action);
        },
    }
};

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)