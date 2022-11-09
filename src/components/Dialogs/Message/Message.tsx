import React from "react";
import s from'../Dialogs.module.scss'
import {MessageType} from "../../../types/types";


const Message=(props:MessageType)=>{
    return <div className={`${s.message} ${props.isYou ? `${s.yourMessage}` : `${s.friendMessage}`}`}>{props.message}</div>
}

export default Message