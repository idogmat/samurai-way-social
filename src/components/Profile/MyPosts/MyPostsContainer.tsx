import React from "react";
import {PostType} from "../../../types/types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


export type PostsType = {
    posts: PostType[],
    newPostText: string,

}


let mapStateToProps = (state: AppStateType): PostsType => {
    return state.profileReducer
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer