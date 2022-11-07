import React, {FC} from "react";
import s from'./Dialogs.module.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogTypes} from "../../types/types";
interface IDialogTypes{
    messages:{
        dialogs:object[]
        messages:object[]
    }
}

const Dialogs:FC<IDialogTypes>=(props:DialogTypes)=>{
    const mapForDialogs=props.messages.dialogs.map((e:any)=>{
        return <DialogItem name={e.name} id={e.id} img={e.img}/>
    })
    const mapForMessages=props.messages.messages.map((e:any)=>{
        return <Message isYou={e.type} message={e.message} id={e.id}/>
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