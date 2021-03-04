const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            const messageBody = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({
                id: state.messages.length + 1,
                message: messageBody
            });
            break;
        default:
            break;
    }
    return state;
};

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;