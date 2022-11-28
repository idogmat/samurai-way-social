import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUsersThunkCreator,
    setCurrentPage, setFetching, setFollowDisable, setFollowThunkCreator, setTotalUsersCount,
    setUsers,
    unFollow,
    UsersType,
    UserType
} from "../../redux/usersReducer";
import React, { useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";
import Users from "./Users";

type PropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (s: UserType[]) => void
    setCurrentPage: (s: number) => void
    setTotalUsersCount: (s: number) => void
    setFetching:(f:boolean)=>void
    setFollowDisable:(u:number,f:boolean)=>void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress:[]
    getUsersThunkCreator:(s:number,v:number)=>void
    setFollowThunkCreator:(s:number,type: 'follow' | 'unfollow')=>void


}

const UsersComponent =React.memo((props:PropsType)=> {
    console.log('Users container')
    useEffect(()=> {
         props.getUsersThunkCreator(props.currentPage,props.pageSize)
    },[])

    const onPageChanged = (p: number) => {
        props.getUsersThunkCreator(p,props.pageSize)
    }
        return <>
            {props.isFetching ?
                <Users users={props.users}
                       follow={props.follow}
                       unFollow={props.unFollow}
                       setCurrentPage={props.setCurrentPage}
                       currentPage={props.currentPage}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       followingInProgress={props.followingInProgress}
                       setFollowDisable={props.setFollowDisable}
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
// let mapDispatchToProps = (dispatch: (action: ActionUserType) => void) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (totalUsers: number) => {
//             dispatch(setTotalUsersCountAC(totalUsers))
//         },
//         setFetching: (fetch: boolean) => {
//             dispatch(setFetchingAC(fetch))
//         }
//     }
// }
// const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)

const UsersContainer = connect(mapStateToProps,  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
    setFollowDisable,
    getUsersThunkCreator,
    setFollowThunkCreator
})(UsersComponent)
export default UsersContainer;