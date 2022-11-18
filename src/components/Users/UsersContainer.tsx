import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";
import {ActionUserType, followAC, setUsers, unfollowAC, UsersType, UserType} from "../../redux/usersReducer";
import Users from "./Users";


let mapStateToProps = (state: AppStateType): UsersType => {
    return state.usersReducer
}
let mapDispatchToProps = (dispatch: (action: ActionUserType) => void) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsers(users))
        }
    }
}

const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)
export default UsersContainer;