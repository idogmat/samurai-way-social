import React from "react";
import s from'../Dialogs.module.scss'
import {NavLink} from "react-router-dom";
const DialogItem =(props:any)=>{
    let path = '/messages/'+props.id
    return(
        <div className={s.dialog +' ' +s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem