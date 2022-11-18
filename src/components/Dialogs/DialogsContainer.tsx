import React, {FC} from "react";
import {DialogType, MessageType} from "../../types/types";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

type DialogsPropsTypes={
    messages:{
        dialogs:DialogType[]
        messages:MessageType[]
        newMessageText:string
    }
    dispatch:(action: any)=>void
}
const DialogsContainer:FC<DialogsPropsTypes>=({messages,dispatch})=>{
    const addPost=()=> {
        let action = addMessageActionCreator()
        dispatch(action)
    }
    const onPostChangeMessage=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        let action = updateNewMessageActionCreator(e.currentTarget.value)
        dispatch(action)
    }
    return <Dialogs messages={messages}
                    onPostChangeMessage={onPostChangeMessage}
                    addPost={addPost}/>
}
export default DialogsContainer

