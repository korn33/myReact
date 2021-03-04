import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActonCreator} from "../../../Redux/profileReducer";


const MyPosts = (props) => {
    const postsComponents = props.state.posts.map(p => <Post text={p.text} likeCounter={p.likeCounter}/>);

    const textArea = React.createRef();

    const btnClick = () => {
        props.dispatch(addPostActionCreator());
    };

    const textAriaOnChange = () => {
        const text = textArea.current.value;
        props.dispatch(updateNewPostTextActonCreator(text));
    };

    return (
        <div>
            <h3 className={s.myPostsHeader}>my posts</h3>
            <div>
                <div className={s.newPost}>
                    <div>
                        <textarea ref={textArea} onChange={textAriaOnChange} value={props.state.newPostText}> </textarea>
                    </div>
                    <div>
                        <button onClick={btnClick}>Опубликовать</button>
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