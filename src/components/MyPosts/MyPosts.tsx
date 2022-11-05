import React from "react";
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
const MyPosts=()=>{

    return(
        <div className={s.posts}>
        <div>
            <textarea name="" id="">

            </textarea>
            <button>Add post</button>
            <div> New post</div>
        </div>
        <div className={s.posts}>
            <Post name={'Jack'} message={'11111'} like={5}/>
            <Post name={'Jack'} message={'22222'} like={5}/>
            <Post name={'Jack'} message={'33333'} like={5}/>
            <Post name={'Jack'} message={'44444'} like={5}/>

        </div>
        </div>
    )
}
export default MyPosts