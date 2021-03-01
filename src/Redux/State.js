const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
        if (action.type === ADD_POST) {
            const newPost = {
                id: this._state.profilePage.posts.length + 1,
                text: this._state.profilePage.newPostText,
                likeCounter: '0'
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribe(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            console.log(action.newText);
            this._callSubscribe(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActonCreator = newText => ({type: UPDATE_NEW_POST_TEXT, newText: newText});

window.state = store.getState();

export default store;