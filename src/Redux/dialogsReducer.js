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
};

const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const messageBody = action.newMessageBody;
            const newMessage = {
                id: state.messages.length + 1,
                message: messageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;