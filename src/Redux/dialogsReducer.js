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
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE: {
            const messageBody = state.newMessageBody;
            const newMessage = {
                id: state.messages.length + 1,
                message: messageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            };
        }
        default:
            return state;
    }
};

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;