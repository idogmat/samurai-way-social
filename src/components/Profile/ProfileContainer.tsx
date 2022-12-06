import React, { useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost, getProfileStatusThunkCreator,
    getProfileUserThunkCreator,
    ProfilePageType, updateProfileStatusThunkCreator
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirectComponent";
import {compose} from "redux";

type PathParamsType={
    userId:string
}
export type MapDispatchToPropsType = {
    getProfileUserThunkCreator:(id:string)=>void
    getProfileStatusThunkCreator:(id: string)=>void
    updateProfileStatusThunkCreator:(id: string)=>void
    addPost:(m:string)=>void
}

export type ProfileOwnPropsType=ProfilePageType & MapDispatchToPropsType
export type ProfilePropsType= RouteComponentProps<PathParamsType> & ProfileOwnPropsType

const ProfileComponent =(props:ProfilePropsType)=> {
    useEffect(() => {
        let userId = props.match.params.userId || '2'
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
            addPost,getProfileStatusThunkCreator,updateProfileStatusThunkCreator}),
    withRouter,
    // withAuthRedirect
)(ProfileComponent)



