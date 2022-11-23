import React, {ComponentType, FunctionComponent, useEffect} from 'react';

import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, ProfileUserType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
type PathParamsType={
    userId:string
}

type MapDispatchToPropsType = {
    setUserProfile:(s:ProfileUserType)=>void
}
export type ProfileMSTPType = {
    currentProfile:ProfileUserType
}
export type ProfileOwnPropsType=ProfileMSTPType & MapDispatchToPropsType
export type ProfilePropsType= RouteComponentProps<PathParamsType> & ProfileOwnPropsType

const ProfileContainer =(props:ProfilePropsType)=> {
    useEffect(()=> {
        console.log('I\'m inside on DOM')
        let userId=props.match.params.userId
        if(!userId) userId ='2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                props.setUserProfile(response.data)
            })
    },[])

        return (
                <Profile {...props}/>
        );
    }

let mapStateToProps=(state:AppStateType):ProfileMSTPType=>state.profileReducer
let withUrlDataContainerComponent=withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile})(withUrlDataContainerComponent);