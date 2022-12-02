import React, { useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost, getProfileStatusThunkCreator,
    getProfileUserThunkCreator,
    ProfilePageType,

    updateNewPostText, updateProfileStatusThunkCreator
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirectComponent";
import {compose} from "redux";

type PathParamsType={
    userId:string
}
export type MapDispatchToPropsType = {
    getProfileUserThunkCreator:(s:string)=>void
    updateNewPostText:(e: string)=>void
    getProfileStatusThunkCreator:(e: string)=>void
    updateProfileStatusThunkCreator:(e: string)=>void
    addPost:()=>void
}

export type ProfileOwnPropsType=ProfilePageType & MapDispatchToPropsType
export type ProfilePropsType= RouteComponentProps<PathParamsType> & ProfileOwnPropsType

const ProfileComponent =(props:ProfilePropsType)=> {
    useEffect(() => {
        let userId = props.match.params.userId
        props.getProfileUserThunkCreator(userId)
        props.getProfileStatusThunkCreator(userId)
    }, [])
        return <Profile {...props}/>

}
// AuthRedirectComponent(ProfileComponent)

let mapStateToProps=(state:AppStateType):ProfilePageType=> state.profileReducer


export default compose<React.ComponentType>(
    connect(
        mapStateToProps,{
            getProfileUserThunkCreator,
            updateNewPostText,
            addPost,getProfileStatusThunkCreator,updateProfileStatusThunkCreator}),
    withRouter,
    // withAuthRedirect
)(ProfileComponent)



