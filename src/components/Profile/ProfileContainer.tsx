import React, { useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost,
    getProfileUserThunkCreator,
    ProfilePageType,
    ProfileUserType,
    updateNewPostText
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirectComponent";

type PathParamsType={
    userId:string
}
export type MapDispatchToPropsType = {
    getProfileUserThunkCreator:(s:string)=>void
    updateNewPostText:(e: string)=>void
    addPost:()=>void
}

export type ProfileOwnPropsType=ProfilePageType & MapDispatchToPropsType
export type ProfilePropsType= RouteComponentProps<PathParamsType> & ProfileOwnPropsType

const ProfileComponent =(props:ProfilePropsType)=> {
    useEffect(() => {
        let userId = props.match.params.userId
        props.getProfileUserThunkCreator(userId)
    }, [])
        return <Profile {...props}/>

}
// AuthRedirectComponent(ProfileComponent)

let mapStateToProps=(state:AppStateType):ProfilePageType=> state.profileReducer

let withUrlDataContainerComponent=withRouter(ProfileComponent)
const ProfileContainer =  withAuthRedirect(
    connect(
        mapStateToProps,{
    getProfileUserThunkCreator,
            updateNewPostText,
            addPost})(withUrlDataContainerComponent));
export default ProfileContainer