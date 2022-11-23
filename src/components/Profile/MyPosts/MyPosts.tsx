import React, {FC} from 'react';
import s from "./MyPosts.module.scss";
import {PostType} from "../../../types/types";
import Post from "./Post/Post";

type MyPostsPropsType={
    posts: PostType[],
    newPostText: string,
    updateNewPostText:(e: string)=>void
    addPost:()=>void
}

const MyPosts:FC<MyPostsPropsType> = ({posts,
                                          newPostText,
                                          updateNewPostText,addPost
                                          }) => {
    const mapForPosts = posts.map((e: PostType, index: number) => {
        return <Post key={index} id={e.id} message={e.message} name={e.name} like={e.like}/>
    })
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.sendMessageForm}>
                    <textarea className={s.textarea}
                              value={newPostText}
                              onChange={(e)=>updateNewPostText(e.currentTarget.value)}
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
    );
};

export default MyPosts;