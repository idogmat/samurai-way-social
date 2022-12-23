import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MapDispatchToPropsType} from "./ProfileContainer";
import MyPosts from "./MyPosts/MyPosts";
import {ProfilePageType} from "../../redux/profileReducer";
import s from './Profile.module.scss'

const Profile = (props:ProfilePageType&MapDispatchToPropsType& { isOwner: boolean }) => {
    return (
        <div className={s.profileBlock}>
            <ProfileInfo updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator}
                         isOwner={props.isOwner}
                         user={props.currentProfile}
                         status={props.profileStatus}
                         savePhoto={props.savePhoto}
            />
            <MyPosts addPost={props.addPost} posts={props.posts}/>
        </div>
    )
}
export default Profile