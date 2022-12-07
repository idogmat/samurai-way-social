import React, {FC} from 'react';
import s from './FormsControls.module.css'
type TextareaType={
    input:any;
    meta:any
    placeholder:string
}
type InputType=any

export const Textarea:FC<TextareaType> = ({input,meta,...props}) => {
    const hasError = meta.error && meta.touched
    return (<div className={s.inputBlock}>
        {hasError ? <span className={s.errorSpan}>{meta.error}</span> :''}
            <textarea  {...props}{...input} className={s.textarea + " " + (hasError ? s.error : '')}/>

    </div>);
};

export const Input:FC<InputType> = ({input,meta,...props}) => {
    const hasError = meta.error && meta.touched
    return (<div className={s.inputBlock}>
        {hasError ? <span className={s.errorSpan}>{meta.error}</span> :''}
        <input  {...props}{...input} className={s.input + " " + (hasError ? s.error : '')}/>

    </div>);
};