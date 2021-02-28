import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    const postsComponents = props.posts.map(p => <Post text={p.text} likeCounter={p.likeCounter}/>);

    return (
        <div>
            <h3 className={s.myPostsHeader}>my posts</h3>
            <div>
                <div className={s.newPost}>
                    <div>
                        <textarea> </textarea>
                    </div>
                    <div>
                        <button>Опубликовать</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsComponents}
                </div>
            </div>
        </div>
    )
};

export default MyPosts