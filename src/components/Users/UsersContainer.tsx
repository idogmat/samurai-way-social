import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setFetching, setFollowDisable, setTotalUsersCount,
    setUsers,
    unFollow,
    UsersType,
    UserType
} from "../../redux/usersReducer";
import React, { useEffect} from "react";

import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";

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
}

const UsersComponent =React.memo((props:PropsType)=> {

    useEffect(()=> {
        props.setFetching(false)
        console.log('I\'m inside on DOM')
        usersAPI.getUsers(props.currentPage,props.pageSize)
            .then(response => {
                props.setUsers(response.data.items)
                props.setTotalUsersCount(response.data.totalCount)
                props.setFetching(true)
            })
    },[])

    const onPageChanged = (p: number) => {
        props.setFetching(false)
        props.setCurrentPage(p)
        usersAPI.getCurrentPage(p,props.pageSize)
            .then(response => {
                props.setUsers(response.items)
                props.setFetching(true)
            })
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
    setFollowDisable
})(UsersComponent)
export default UsersContainer;