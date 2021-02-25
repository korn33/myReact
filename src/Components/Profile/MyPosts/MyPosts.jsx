import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Опубликовать</button>
                <Post text = 'Первый пост' likeCounter = '3'/>
                <Post text = 'Второй пост' likeCounter = '7'/>
            </div>
        </div>
    )
};

export default MyPosts