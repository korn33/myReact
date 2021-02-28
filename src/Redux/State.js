const state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Первый пост', likeCounter: '3'},
            {id: 2, text: 'Второй пост', likeCounter: '5'},
            {id: 3, text: 'Третий пост', likeCounter: '7'},
        ],
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
};

export default state;