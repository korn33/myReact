import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActonCreator} from "../../../Redux/profileReducer";

const MyPostsContainer = (props) => {
    const state = props.store.getState().profilePage;

    const updateNewPost = (text) => {
        const action = updateNewPostTextActonCreator(text);
        props.store.dispatch(action);
    };

    const addPost = () => {
        const action = addPostActionCreator();
        props.store.dispatch(action);
    };

    return (
        <MyPosts updateNewPostText={updateNewPost}
                    addPost={addPost}
                    posts={state.posts}
                    newPostText={state.newPostText}
    />)
};

export default MyPostsContainer;