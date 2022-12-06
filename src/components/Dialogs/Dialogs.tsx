import React from "react";
import s from './Dialogs.module.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../types/types";
import {Redirect} from "react-router-dom";
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm, reset, SubmitHandler} from "redux-form";
import {FormDataType} from "../Login/Login";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthC, required} from "../../utils/validators";
import {useDispatch} from "react-redux";

type PropsTypes = {
    dialogs: DialogType[]
    messages: MessageType[]
    addMessage: (m:string) => void
}
type SubmitType={
    newMessageBody:string
}
const Dialogs = (props: PropsTypes) => {
    const dispatch =useDispatch()
    const mapForMessages = props.messages.map((e, index) => {
        return <Message key={index} isYou={e.isYou} message={e.message} id={e.id}/>
    })
    const mapForDialogs = props.dialogs.map((e, index) => {
        return <DialogItem key={index} name={e.name} id={e.id} img={e.img}/>
    })
    const addNewMessage=(e:SubmitType)=>{
        props.addMessage(e.newMessageBody)
        dispatch(reset('dialogAddMessageForm'))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {mapForDialogs}

            </div>
            <div className={s.messages}>
                <div className={s.messagesList}>
                    {mapForMessages}
                </div>

                    {/*<textarea className={s.textarea}*/}
                    {/*          */}
                    {/*          value={props.newMessageText}*/}
                    {/*          onChange={(e) => props.updateNewMessage(e.currentTarget.value)}*/}
                    {/*          onKeyPress={(e) => e.key === "Enter" && props.addMessage()}*/}
                    {/*/>*/}

                    {/*<button className={s.sendBtn} onClick={props.addMessage}>Add post</button>*/}
                    <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>
    )
}
export default Dialogs

const validateLength = maxLengthC(100)
const AddMessageForm:React.FC<InjectedFormProps<SubmitType>> =(props)=>{
    return  <form onSubmit={props.handleSubmit} className={s.sendMessageForm}>
                    <Field component={Textarea}
                           placeholder={'YourMessage'}
                           name={'newMessageBody'}
                           validate={[required,validateLength]}
                    />

        <button className={s.sendBtn}>Add post</button>
    </form>
}
const AddMessageFormRedux = reduxForm<SubmitType>({form:'dialogAddMessageForm'})(AddMessageForm)