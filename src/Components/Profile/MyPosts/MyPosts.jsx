import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, Form, Formik} from "formik";
import * as yup from 'yup';

const maxSize = 10;

const schema = yup.object().shape({
    newPost: yup.string().max(maxSize, `maximum size ${maxSize}`),
});

const AddNewPostForm = (props) => {
    return (
        <Formik
            initialValues={{
                newPost: '',
            }}
            onSubmit={values => {
                props.onSubmit(values.newPost);
            }}
            validationSchema={schema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <Form>
                    <div>
                        <Field name="newPost" type="text"/>
                    </div>
                    {touched.newPost && errors.newPost && <p className={s.errorMessage}>{errors.newPost}</p>}
                    <button
                        type="submit"
                        disabled={!(isValid && dirty)}
                    >Add Post
                    </button>
                </Form>
            )}

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