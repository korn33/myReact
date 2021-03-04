import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Первый пост', likeCounter: '3'},
                {id: 2, text: 'Второй пост', likeCounter: '5'},
                {id: 3, text: 'Третий пост', likeCounter: '7'},
            ],
            newPostText: 'Что нового?'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Yo'},
                {id: 2, message: 'Ha Ha'},
                {id: 3, message: 'Wats up?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ],
            dialogs: [
                {id: 1, name: 'Dimon'},
                {id: 2, name: 'Alexey'},
                {id: 3, name: 'Valera'},
            ],
            newMessageBody: '',
        },
        navbar: {}
    },
    _callSubscribe() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);
        this._callSubscribe(this._state);
    }
};

window.state = store.getState();

export default store;