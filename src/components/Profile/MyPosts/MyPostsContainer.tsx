import React, {FC} from "react";
import {PostType} from "../../../types/types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


export type PostsType = {
    posts: PostType[],
    newPostText: string,
    dispatch: (action: any) => void
}

const MyPostsContainer:FC<PostsType> = ({
                                            posts,
                                            dispatch,
                                            newPostText}) => {

    const addPost = () => {
        let action = addPostActionCreator()
        dispatch(action)
    }
    const onPostChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e)
        let text: string = e.currentTarget.value
        let action = updateNewPostTextActionCreator(text)
        dispatch(action)
    }

    return <MyPosts onPostChange={onPostChange}
                    posts={posts}
                    addPost={addPost}
                    newPostText={newPostText}/>
}
export default MyPostsContainer