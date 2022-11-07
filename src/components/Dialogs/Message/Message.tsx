import React from "react";
import s from'../Dialogs.module.scss'


const Message=(props:any)=>{
    return <div className={`${s.message} ${props.isYou ? `${s.yourMessage}` : `${s.friendMessage}`}`}>{props.message}</div>
}

export default Message