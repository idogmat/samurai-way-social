import React from 'react';
import {Field, InjectedFormProps, reduxForm,} from 'redux-form'
import {FormDataType} from "./Login";

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       placeholder={'Login'}
                       component={'input'} type="text"/>
            </div>
            <div>
                <Field name='password'
                       placeholder={'Password'}
                       component={'input'} type="password"/>
            </div>
            <div>
                <label htmlFor="rememberMe">Remember me</label>
                <Field name={'rememberMe'}
                       type="checkbox"
                       component={'input'}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
};


export default LoginForm;

