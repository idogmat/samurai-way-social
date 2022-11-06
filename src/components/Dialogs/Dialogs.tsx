import React from "react";
import s from'./Dialogs.module.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs=(props:any)=>{

    const mapForDialogs=props.dialogs.map((e:any)=>{
        return <DialogItem name={e.name} id={e.id}/>
    })
    const mapForMessages=props.messages.map((e:any)=>{
        return <Message message={e.message} id={e.id}/>
    })
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {mapForDialogs}

            </div>
            <div className={s.messages}>
                <div className={s.messagesList}>
                    {mapForMessages}
                </div>
            </div>
        </div>
    )
}
export default Dialogs