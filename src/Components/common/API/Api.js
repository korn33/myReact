import axios from "axios";

const API_KEY = '036d8e46-8e04-430b-9e3f-a214b4d14402';
const SERVER_URL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL,
    headers: {
        "API-KEY": API_KEY,
    }
});

export const usersAPI = {
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(responce => responce.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(responce => responce.data)
    },
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data)
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(responce => responce.data)
    }
};

export const authAPI = {
    getUserData() {
        return instance.get(`auth/me`)
            .then(responce => responce.data)
    }
};