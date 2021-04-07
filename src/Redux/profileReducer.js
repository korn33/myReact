import {profileAPI} from "../Components/common/API/Api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const defaultState =  {
    posts: [
        {id: 1, text: 'Первый пост', likeCounter: '3'},
        {id: 2, text: 'Второй пост', likeCounter: '5'},
        {id: 3, text: 'Третий пост', likeCounter: '7'},
    ],
    profile: null,
    status: "empty",
};

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                text: action.newPostText,
                likeCounter: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
const setUserStatus = status => ({type: SET_USER_STATUS, status});

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
};

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data));
        });
};

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.setUserStatus(status)
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
};



export default profileReducer;