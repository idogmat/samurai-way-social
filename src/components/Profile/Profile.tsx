import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";


const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo user={props.currentProfile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile