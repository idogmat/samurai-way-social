import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MapDispatchToPropsType} from "./ProfileContainer";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/profileReducer";


const Profile = (props:ProfilePageType&MapDispatchToPropsType) => {
    return (
        <div>
            <ProfileInfo user={props.currentProfile}/>
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} posts={props.posts}
                     newPostText={props.newPostText}/>
        </div>
    )
}
export default Profile