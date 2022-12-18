import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MapDispatchToPropsType} from "./ProfileContainer";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/profileReducer";
import s from './Profile.module.scss'

const Profile = (props:ProfilePageType&MapDispatchToPropsType) => {
    return (
        <div className={s.profileBlock}>
            <ProfileInfo updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator} user={props.currentProfile} status={props.profileStatus}/>
            <MyPosts addPost={props.addPost} posts={props.posts}/>
        </div>
    )
}
export default Profile