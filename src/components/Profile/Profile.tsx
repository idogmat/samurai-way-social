import React, {FC} from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType} from "../../types/types";
export type PropsTypes= {
    profile: {
        posts:PostType[]
        newPostText:string
    },
    dispatch:(action: any)=>void
}


const Profile:FC<PropsTypes>=({profile,dispatch})=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={profile.posts}
                     dispatch={dispatch}
                     newPostText={profile.newPostText}/>
        </div>
    )
}
export default Profile