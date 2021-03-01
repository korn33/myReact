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
        navbar: {

        }
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    addPost() {
        const newPost = {
            id: this._state.profilePage.posts.length+1,
            text: this._state.profilePage.newPostText,
            likeCounter: '0'
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribe(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe(this._state);
    }
};

window.state = store.getState();

export default store;