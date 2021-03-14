const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const GET_USERS_COUNT = 'GET_USERS_COUNT';
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';

const defaultState =  {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
};

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    } else {
                        return user
                    }
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    } else {
                        return user
                    }
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case GET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            };
        case SET_PAGE_NUMBER:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const getUsersCountAC = (count) => ({type: GET_USERS_COUNT, count});
export const setCurrentPageAC = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber});

export default usersReducer;