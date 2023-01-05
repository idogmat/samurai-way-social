import React from 'react';
import {Field, InjectedFormProps, reduxForm, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
import {ProfileUserType} from "../../../redux/profileReducer";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
      <div>
          <div>
              {children}
          </div>
          {hasError && <span>{error}</span>}
      </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {

    return (
      <FormControl meta={meta}> <textarea {...input} {...restProps}/> </FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {
    return (
      <FormControl meta={meta}> <input {...input} {...restProps}/> </FormControl>
    )
}

export const createField = (placeholder: string | null, name: string, validators: ((value: string) => string | undefined)[], component: React.FC<WrappedFieldProps>, props = {}, text = '') => (
  <div>
      <Field placeholder={placeholder}
             name={name}
             validate={validators}
             component={component}
             {...props}
      /> {text}
  </div>
)
const ProfileDataForm = (props: InjectedFormProps<ProfileUserType>) => {
    const {handleSubmit, initialValues} = props
    return <form onSubmit={handleSubmit}>
        <div>
            <button onClick={handleSubmit}>save</button>
        </div>
        <div>
            <b>Full name: </b> {createField('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking For A Job: </b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My professional
                skills: </b> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me: </b> {createField('About me', 'aboutMe', [], Textarea)}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileUserType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;