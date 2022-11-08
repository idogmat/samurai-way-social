import React, {FC} from "react";

import MyPosts, {PostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
type ProfileTypes= { posts:PostType[] }


const Profile=(props:ProfileTypes)=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
export default Profile