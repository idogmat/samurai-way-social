import React from "react";
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import {ProfileTypes} from "../../../types/types";

const MyPosts = (props:ProfileTypes) => {
    const mapForPosts = props.posts.map((e:any)=>{
        return <Post id={e.id} message={e.message} like={e.like}/>
    })
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="">

                    </textarea>
                </div>
                <button>Add post</button>
                <div> New post</div>
            </div>
            <div className={s.posts}>
                {mapForPosts}


            </div>
        </div>
    )
}
export default MyPosts