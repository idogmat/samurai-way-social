import React from 'react';

import s from './Login.module.scss'
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";
import {AppStateType} from "../../redux/redux-store";
import {
    addPost,
    getProfileStatusThunkCreator,
    getProfileUserThunkCreator,
    ProfilePageType, updateProfileStatusThunkCreator
} from "../../redux/profileReducer";
import {AuthUserStateType, loginUserTC} from "../../redux/authReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

export type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
const Login = (props:any) => {
    const onSubmit = (formData:FormDataType)=>{
        console.log(formData)
        props.loginUserTC(formData)
    }
    return (
        <div className={s.loginForm}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
let mapStateToProps=(state:AppStateType):AuthUserStateType=> state.authReducer
export default compose<React.ComponentType>(
    connect(
        mapStateToProps,{
            loginUserTC}),
    // withAuthRedirect
)(Login)
