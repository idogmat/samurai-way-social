import React from "react";
import s from'./Dialogs.module.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../types/types";

type PropsTypes={
    messages:{
        dialogs:DialogType[]
        messages:MessageType[]
        newPostMessage:string

    }
    addPostMessage:Function
    updateNewPostMessage:Function
}

const Dialogs=(props:PropsTypes)=>{
    const mapForDialogs=props.messages.dialogs.map((e,index)=>{
        return <DialogItem key={index} name={e.name} id={e.id} img={e.img}/>
    })
    const mapForMessages=props.messages.messages.map((e,index)=>{
        return <Message key={index} isYou={e.isYou} message={e.message} id={e.id}/>
    })

    let newPostElement:any=React.createRef();
    const addPost=()=> {
        props.addPostMessage()

    }
    const onPostChangeMessage=()=>{
        let text:string=newPostElement.current.value
        props.updateNewPostMessage(text)
    }
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {mapForDialogs}

            </div>
            <div className={s.messages}>
                <div className={s.messagesList}>
                    {mapForMessages}
                </div>
                <div className={s.sendMessageForm}>
                    <textarea className={s.textarea}
                              ref={newPostElement}
                              value={props.messages.newPostMessage}
                              onChange={onPostChangeMessage}
                    />

                    <button className={s.sendBtn} onClick={addPost}>Add post</button>
                </div>
            </div>


        </div>
    )
}
export default Dialogs