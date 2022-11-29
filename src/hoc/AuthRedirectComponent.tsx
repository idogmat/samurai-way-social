import {Redirect} from "react-router-dom";
import React from "react";
import ProfileContainer from "../components/Profile/ProfileContainer";

let AuthRedirectComponent=(Component:React.Component)=>{
    console.log(Component)
    // if (props.isAuth) {
    //     return <ProfileContainer/>
    // } else {
    //     return <Redirect to={'/login'}/>
    // }
}
export default AuthRedirectComponent