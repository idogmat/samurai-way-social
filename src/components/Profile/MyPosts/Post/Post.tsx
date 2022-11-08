import React from "react";
import s from "./Post.module.scss";
export type PostType={
    id:number
    name:string
    message:string
    like:number
}
const Post =(props:PostType)=>{
    return(
        <div className={s.item}>
            <div>
            <p>{props.name}</p>
            <img src="https://www.nme.com/wp-content/uploads/2022/10/Rick_And_Morty_Portal_Gun_JuRicksic_Mort-696x442.jpg" alt="user"/>

            </div>
            <div>
                <p>{props.message}</p>
                <span>Like:{props.like}</span>
            </div>


        </div>
    )
}
export default Post