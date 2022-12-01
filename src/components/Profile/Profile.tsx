import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MapDispatchToPropsType} from "./ProfileContainer";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType, updateProfileStatusThunkCreator} from "../../redux/profileReducer";


const Profile = (props:ProfilePageType&MapDispatchToPropsType) => {
    return (
        <div>
            <ProfileInfo updateProfileStatusThunkCreator={props.getProfileStatusThunkCreator} user={props.currentProfile} status={props.profileStatus}/>
            <MyPosts updateNewPostText={props.updateNewPostText} addPost={props.addPost} posts={props.posts}
                     newPostText={props.newPostText}/>
        </div>
    )
}
export default Profile