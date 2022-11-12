import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType} from "../../types/types";
export type PropsTypes= {
    profile: {
        posts:PostType[]
        newPostText:string
    },
    dispatch:(action: any)=>void
}


const Profile=(props:PropsTypes)=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profile.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profile.newPostText}/>
        </div>
    )
}
export default Profile