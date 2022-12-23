import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPost, getProfileStatusThunkCreator,
    getProfileUserThunkCreator,
    ProfilePageType, savePhoto, updateProfileStatusThunkCreator
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirectComponent";
import {compose} from "redux";
import {AuthUserStateType} from "../../redux/authReducer";

type PathParamsType = {
    userId: string
}
export type MapDispatchToPropsType = {
    getProfileUserThunkCreator: (id: string) => void
    getProfileStatusThunkCreator: (id: string) => void
    updateProfileStatusThunkCreator: (id: string) => void
    savePhoto: (file: string) => void
    addPost: (m: string) => void
    id: number
}

export type ProfileOwnPropsType = ProfilePageType & AuthUserStateType & MapDispatchToPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & ProfileOwnPropsType

const ProfileComponent = (props: ProfilePropsType) => {

    useEffect(() => {
        let userId = !!props.match.params.userId
            ? props.match.params.userId
            : props.id+''
        props.getProfileUserThunkCreator(userId)
        props.getProfileStatusThunkCreator(userId)
    }, [props.match.params.userId])
    return <Profile {...props} isOwner={!props.match.params.userId}/>

}
let mapStateToProps = (state: AppStateType): ProfilePageType & AuthUserStateType => {
    return {
        ...state.profileReducer,
        ...state.authReducer
    }
}
export default compose<React.ComponentType>(
    connect(
        mapStateToProps, {
            getProfileUserThunkCreator,
            addPost, getProfileStatusThunkCreator,
            updateProfileStatusThunkCreator,
            savePhoto
        }),
    withRouter,
    withAuthRedirect
)(ProfileComponent)



