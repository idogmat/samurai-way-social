import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUsersThunkCreator,
    setCurrentPage, setFetching, setFollowThunkCreator, setTotalUsersCount,
    setUsers,
    UsersType,
    UserType
} from "../../redux/usersReducer";
import React, {useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/AuthRedirectComponent";
import {compose} from "redux";

type PropsType = {
    users: UserType[]
    setUsers: (s: UserType[]) => void
    setCurrentPage: (s: number) => void
    setTotalUsersCount: (s: number) => void
    setFetching: (f: boolean) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    getUsersThunkCreator: (s: number, v: number) => void
    setFollowThunkCreator: (s: number, type: 'follow' | 'unfollow') => void
}

const UsersComponent = React.memo((props: PropsType) => {
    console.log('Users container')
    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, props.pageSize)
    }, [])

    const onPageChanged = (p: number) => {
        props.getUsersThunkCreator(p, props.pageSize)
    }
    return <>
        {props.isFetching ?
            <Users users={props.users}
                   currentPage={props.currentPage}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   followingInProgress={props.followingInProgress}
                   onPageChanged={onPageChanged}
                   setFollowThunkCreator={props.setFollowThunkCreator}
            />
            : <Preloader/>
        }
    </>
})

let mapStateToProps = (state: AppStateType): UsersType => {
    return state.usersReducer
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setFetching,
        getUsersThunkCreator,
        setFollowThunkCreator
    }),
    withAuthRedirect
)(UsersComponent)