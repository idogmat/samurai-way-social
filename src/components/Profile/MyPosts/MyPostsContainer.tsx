import {addPost, ProfilePageType, ProfileUserType, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


import React from 'react';

const MyPostsContainer = (props:any) => {
    debugger
    return
};

export default MyPostsContainer;

// let mapDispatchToProps = (dispatch: (action: any) => void) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         onPostChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//             dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
//         }
//     }
// }
