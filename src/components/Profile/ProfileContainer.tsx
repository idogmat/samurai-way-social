import React, { useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { getProfileUserThunkCreator, ProfileUserType} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import AuthRedirectComponent from "../../hoc/AuthRedirectComponent";
type PathParamsType={
    userId:string
}
type MapDispatchToPropsType = {
    getProfileUserThunkCreator:(s:string)=>void
}
export type ProfileMSTPType = {
    currentProfile:ProfileUserType
    isAuth:boolean

}
export type ProfileOwnPropsType=ProfileMSTPType & MapDispatchToPropsType
export type ProfilePropsType= RouteComponentProps<PathParamsType> & ProfileOwnPropsType

const ProfileComponent =(props:ProfilePropsType)=> {
    useEffect(() => {
        let userId = props.match.params.userId
        props.getProfileUserThunkCreator(userId)
    }, [])
    if (props.isAuth) {
        return <Profile {...props}/>
    } else {
        return <Redirect to={'/login'}/>
    }
}
// AuthRedirectComponent(ProfileComponent)

let mapStateToProps=(state:AppStateType):ProfileMSTPType=> {
    return {
        currentProfile: state.profileReducer,
        isAuth: state.authReducer.isAuth
    }
}
let withUrlDataContainerComponent=withRouter(ProfileComponent)
const ProfileContainer =  connect(mapStateToProps,{
    getProfileUserThunkCreator})(withUrlDataContainerComponent);
export default ProfileContainer