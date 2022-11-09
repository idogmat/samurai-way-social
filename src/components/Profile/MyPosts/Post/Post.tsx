import React from "react";
import s from "./Post.module.scss";
import {PostType} from "../../../../types/types";

const Post =(props:PostType)=>{
    return(
        <div className={s.item}>
            <div className={s.imgName}>
            <img src="https://www.nme.com/wp-content/uploads/2022/10/Rick_And_Morty_Portal_Gun_JuRicksic_Mort-696x442.jpg" alt="user"/>
            <p className={s.name}>{props.name}</p>
            </div>
            <div className={s.message}>
                <p className={s.text}>{props.message}</p>
                <span className={s.like}>Like:{props.like}</span>
            </div>


        </div>
    )
}
export default Post