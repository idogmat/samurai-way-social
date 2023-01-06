import React from 'react';
import s from './Login.module.scss'
import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";
import {AppStateType} from "../../redux/redux-store";
import {AuthUserStateType, loginUserTC} from "../../redux/authReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export type FormDataType = {
  id: number
  login: string
  password: string
  rememberMe: boolean
  captcha:string|null
}
const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm)
const Login = (props: any) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginUserTC(formData)
  }
  if (props.isAuth) {
    return <Redirect to={`/profile/${props.id}`}/>
  } else {
    return (
      <div className={s.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} initialValues={props.captcha}/>

      </div>
    );
  }
};
let mapStateToProps = (state: AppStateType): AuthUserStateType => state.authReducer
export default compose<React.ComponentType>(
  connect(
    mapStateToProps, {
      loginUserTC
    }),
)(Login)
