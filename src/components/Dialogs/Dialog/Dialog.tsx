import React from "react";
import s from'../Dialogs.module.scss'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../types/types";
const DialogItem =(props:DialogType)=>{
    let path = '/messages/'+props.id
    return(
        <div className={s.dialog +' ' +s.active}>
            <img src={props.img} alt="user"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem