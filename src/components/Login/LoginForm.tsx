import React from 'react';
import {Field, InjectedFormProps, reduxForm,} from 'redux-form'
import {FormDataType} from "./Login";
import {Input} from "../common/FormsControls/FormsControls";
import s from './Login.module.scss'
import {required} from "../../utils/validators";

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = React.memo((props) => {
    return <form onSubmit={props.handleSubmit}>
            <div className={s.inputField}>
                <Field name={'email'}
                       placeholder={'Email'}
                       component={Input}
                       validate={required}
                       type="text"/>
            </div>
            <div className={s.inputField}>
                <Field name='password'
                       placeholder={'Password'}
                       component={Input}
                       validate={required}
                       type="password"/>
            </div>
            <div className={s.inputField}>
                <label htmlFor="rememberMe">Remember me</label>

                <Field name={'rememberMe'}
                       id={'rememberMe'}
                       type="checkbox"
                       component={'input'}/>
            </div>
            <div>
                <button className={s.sendBtn}>Login</button>
            </div>
        </form>
});


export default LoginForm;

