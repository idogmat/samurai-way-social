import React, {FC} from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
interface IProfileTypes{
    posts:Array<object>
}

const Profile:FC<IProfileTypes>=(props:IProfileTypes)=>{
    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}
export default Profile