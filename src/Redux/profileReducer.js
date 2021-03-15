const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const defaultState =  {
    posts: [
        {id: 1, text: 'Первый пост', likeCounter: '3'},
        {id: 2, text: 'Второй пост', likeCounter: '5'},
        {id: 3, text: 'Третий пост', likeCounter: '7'},
    ],
    newPostText: 'Что нового?',
    profile: null,
};

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                likeCounter: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActonCreator = newText => ({type: UPDATE_NEW_POST_TEXT, newText: newText});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});

export default profileReducer;