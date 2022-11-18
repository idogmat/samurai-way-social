import React from "react";
import s from'./Dialogs.module.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../types/types";

type PropsTypes={
    messages:{
        dialogs:DialogType[]
        messages:MessageType[]
        newMessageText:string
    }
    onPostChangeMessage:(e: React.ChangeEvent<HTMLTextAreaElement>)=>void
    addPost:()=>void
}

const Dialogs=(props:PropsTypes)=>{
    const mapForMessages=props.messages.messages.map((e,index)=>{
        return <Message key={index} isYou={e.isYou} message={e.message} id={e.id}/>
    })
    const mapForDialogs=props.messages.dialogs.map((e,index)=>{
        return <DialogItem key={index} name={e.name} id={e.id} img={e.img}/>
    })
    let newPostElement:any=React.createRef();
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
                              value={props.messages.newMessageText}
                              onChange={props.onPostChangeMessage}
                              onKeyPress={(e)=>e.key ==="Enter" && props.addPost()}
                    />

                    <button className={s.sendBtn} onClick={props.addPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs