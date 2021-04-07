import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ErrorMessage, Field, Form, Formik} from "formik";

const AddNewPostForm = (props) => {
    return (
        <Formik
            initialValues={{
                newPost: '',
            }}
            onSubmit={values => {
                props.onSubmit(values.newPost);
            }}
        >
            <Form>
                <div>
                    <Field name="newPost" type="text"/>
                    <ErrorMessage name="newPost"/>
                </div>
                <button type="submit">Add Post</button>
            </Form>
        </Formik>
    );
};

const MyPosts = (props) => {
    const postsComponents = props.posts.map(p => <Post text={p.text} likeCounter={p.likeCounter} key={p.id}/>);

    const btnClick = (value) => {
        props.addPost(value);
    };

    return (
        <div>
            <h3 className={s.myPostsHeader}>my posts</h3>
            <div>
                <div className={s.newPost}>
                    <AddNewPostForm onSubmit={btnClick}/>
                </div>
                <div className={s.posts}>
                    {postsComponents}
                </div>
            </div>
        </div>
    )
};

export default MyPosts