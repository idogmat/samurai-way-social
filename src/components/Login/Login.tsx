import React from 'react';

import s from './Login.module.scss'
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";

export type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
const Login = () => {
    const onSubmit = (fomData:FormDataType)=>{
        console.log(fomData)
    }
    return (
        <div className={s.loginForm}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;