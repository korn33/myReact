import React from "react";
import s from './Login.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';

const maxSizeLogin = 20;
const minSizePassword = 6;

const schema = yup.object().shape({
    login: yup.string().max(maxSizeLogin, `maximum size ${maxSizeLogin}`).required('Required field'),
    password: yup.string().min(minSizePassword, `minimum size ${minSizePassword}`).required('Required field'),
});

const SignupForm = (props) => {
    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
                rememberMe: false,
            }}
            onSubmit={values => {
                props.onSubmit(values);
            }}
            validationSchema={schema}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                <Form>
                    <div>
                        <label htmlFor="login">login</label>
                        <Field name="login" type="text"/>
                    </div>
                    {touched.login && errors.login && <p className={s.errorMessage}>{errors.login}</p>}
                    <div>
                        <label htmlFor="password">password</label>
                        <Field name="password" type="password"/>
                    </div>
                    {touched.password && errors.password && <p className={s.errorMessage}>{errors.password}</p>}
                    <div>
                        <label htmlFor="rememberMe">rememberMe</label>
                        <Field name="rememberMe" type="checkbox"/>
                    </div>
                    <button
                        type="submit"
                        disabled={!(isValid && dirty)}
                    >Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

const Login = (props) => {
    const foo = (values) => {
        console.log(values);
    };
    return (<>
            <h1 className={s.message}>Need <a href={'https://social-network.samuraijs.com'} target="_blank">sign
                in</a> or:</h1>
            <SignupForm onSubmit={foo}/>
        </>
    )
};

export default Login;