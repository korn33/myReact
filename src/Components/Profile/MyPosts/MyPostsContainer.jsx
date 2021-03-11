import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActonCreator} from "../../../Redux/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            const action = updateNewPostTextActonCreator(text);
            dispatch(action);
        },
        addPost: () => {
            const action = addPostActionCreator();
            dispatch(action);
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;