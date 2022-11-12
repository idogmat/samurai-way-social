import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType} from "../../types/types";
export type PropsTypes= {
    profile: {
        posts:PostType[]
        newPostText:string
    },
    updateNewPostText:Function
    addPost:Function
}


const Profile=(props:PropsTypes)=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profile.posts}
                     addPost={props.addPost}
                     newPostText={props.profile.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}
export default Profile