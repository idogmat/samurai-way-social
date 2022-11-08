import React from "react";
import s from './MyPosts.module.scss'
import Post, {PostType} from "./Post/Post";
export type PostsType={
    posts:PostType[]
}

const MyPosts = (props:PostsType) => {
    const mapForPosts = props.posts.map((e:PostType)=>{
        return <Post id={e.id} message={e.message} name={e.name} like={e.like}/>
    })
    let newPostElement:any=React.createRef();
    const addPost=()=> {
    let text:string=newPostElement.current.value
        alert(text)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}>
                    </textarea>
                </div>
                <button onClick={addPost}>Add post</button>
                <div> New post</div>
            </div>
            <div className={s.posts}>
                {mapForPosts}


            </div>
        </div>
    )
}
export default MyPosts