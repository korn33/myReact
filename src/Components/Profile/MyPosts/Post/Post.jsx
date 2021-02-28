import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={`${s.mainContent} ${s.elemPost}`}>
                <div className={`${s.avatar} ${s.elemPost}`}></div>
                <div className={`${s.text} ${s.elemPost}`}>{props.text}</div>
            </div>
            <div className={`${s.like} ${s.elemPost}`}>{`Like (${props.likeCounter} people like this)`}</div>
        </div>
    )
};

export default Post