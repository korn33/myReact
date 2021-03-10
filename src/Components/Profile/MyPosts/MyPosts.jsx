import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    debugger;
    const postsComponents = props.posts.map(p => <Post text={p.text} likeCounter={p.likeCounter}/>);

    // const textArea = React.createRef();

    const btnClick = () => {
        props.addPost();
    };

    const textAriaOnChange = (e) => {
        const newText = e.currentTarget.value;
        props.updateNewPostText(newText);

    };

    return (
        <div>
            <h3 className={s.myPostsHeader}>my posts</h3>
            <div>
                <div className={s.newPost}>
                    <div>
                        <textarea onChange={textAriaOnChange} value={props.newPostText}> </textarea>
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