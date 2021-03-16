import {authAPI} from "../Components/common/API/Api";

const SET_USER_DATA = 'SET_USER_DATA';

const defaultState = {
    isFetching: false,
    isAuth: false,
    userId: null,
    email: null,
    login: null,
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
};

const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export const getUser = () => (dispatch) => {
    authAPI.getUserData()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setUserData(id, email, login));
            }
        })
};

export default authReducer;