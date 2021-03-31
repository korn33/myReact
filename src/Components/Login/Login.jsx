import React from "react";
import s from './Login.module.css';
import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";

const SignupForm = () => {
    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
                rememberMe: false,
            }}
            onSubmit={values => {
                console.log(values);
            }}
        >
            <Form>
                <div>
                    <label htmlFor="login">login</label>
                    <Field name="login" type="text"/>
                    <ErrorMessage name="login"/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <Field name="password" type="text"/>
                    <ErrorMessage name="password"/>
                </div>
                <div>
                    <label htmlFor="rememberMe">rememberMe</label>
                    <Field name="rememberMe" type="checkbox"/>
                    <ErrorMessage name="rememberMe"/>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

const Login = (props) => {
    const test = () => {
        console.log('test');
    };
    return (<>
            <h1 className={s.message}>Need <a href={'https://social-network.samuraijs.com'} target="_blank">sign
                in</a> or:</h1>
            <SignupForm onSubmit={test}/>
        </>
    )
};

export default Login;