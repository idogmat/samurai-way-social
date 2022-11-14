import React from "react";
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import {PostType} from "../../../types/types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



type PostsType={
    posts:PostType[],
    newPostText:string,
    dispatch:(action: any)=>void
}

const MyPosts = (props:PostsType) => {

    const mapForPosts = props.posts.map((e:PostType,index:number)=>{
        return <Post key={index} id={e.id} message={e.message} name={e.name} like={e.like}/>
    })
    let newPostElement:any=React.createRef();
    const addPost=()=> {
       let action= addPostActionCreator()
        props.dispatch(action)
    }
    const onPostChange=()=>{
        let text:string=newPostElement.current.value
       let action= updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.sendMessageForm}>
                    <textarea className={s.textarea}
                              ref={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                    />

                    <button className={s.sendBtn}
                            onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.postsList}>
                {mapForPosts}


            </div>
        </div>
    )
}
export default MyPosts