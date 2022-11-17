import React from "react";
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import {PostType} from "../../../types/types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


type PostsType = {
    posts: PostType[],
    newPostText: string,
    dispatch: (action: any) => void
}

const MyPosts = (props: PostsType) => {

    const mapForPosts = props.posts.map((e: PostType, index: number) => {
        return <Post key={index} id={e.id} message={e.message} name={e.name} like={e.like}/>
    })

    const addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action)
    }
    const onPostChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.sendMessageForm}>
                    <textarea className={s.textarea}
                              value={props.newPostText}
                              onChange={(e)=>onPostChange(e)}
                              onKeyPress={(e) => e.key === "Enter" && addPost()}
                    />

                    <button className={s.sendBtn}
                            onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.postsList}>
                {mapForPosts}


            </div>
        </div>
    )
}
export default MyPosts