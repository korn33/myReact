const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const defaultState = {
    messages: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Ha Ha'},
        {id: 3, message: 'Wats up?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'uuuuuuuuuuu'},
    ],
    dialogs: [
        {id: 1, name: 'Dimon'},
        {id: 2, name: 'Alexey'},
        {id: 3, name: 'Valera'},
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = defaultState, action) => {
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