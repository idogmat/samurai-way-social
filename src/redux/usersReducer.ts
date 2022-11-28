import {followersAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const SET_FETCHING = 'SET-FETCHING'
const SET_FOLLOWING_USER = 'SET-FOLLOWING-USER'

type FollowType = ReturnType<typeof follow>
type unFollowType = ReturnType<typeof unFollow>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type setFetchingType = ReturnType<typeof setFetching>
type setFollowDisableType = ReturnType<typeof setFollowDisable>

export type ActionUserType =
    FollowType
    | unFollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | setFetchingType
    | setFollowDisableType

export type UserType = {
    id: number,
    name: string,
    status: string,
    followed: boolean,
    photos: {
        small: string
        large: string
    }

}
export type UsersType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}

const initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


const usersReducer = (state = initialState, action: ActionUserType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return {...u}
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return {...u}
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS:
            return {...state, totalUsersCount: action.totalUsers}
        case SET_FETCHING:
            return {...state, isFetching: action.fetch}
        case SET_FOLLOWING_USER:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(u => u !== action.userId)
            }
        default:
            return state
    }
}
export const follow = (userId: number) => ({type: FOLLOW, userId}) as const
export const unFollow = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalUsers: number) => ({type: SET_TOTAL_USERS, totalUsers}) as const
export const setFetching = (fetch: boolean) => ({type: SET_FETCHING, fetch}) as const
export const setFollowDisable = (userId: number, isFetching: boolean) => ({
    type: SET_FOLLOWING_USER,
    userId,
    isFetching
}) as const


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setFetching(false))
    usersAPI.getUsers(currentPage, pageSize)
        .then((response: any) => {
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
            dispatch(setFetching(true))
        })
}
export const setFollowThunkCreator = (userId: number, type: 'follow' | 'unfollow') => (dispatch: Dispatch) => {
    switch (type) {
        case "follow":
            dispatch(setFollowDisable(userId, false))
            followersAPI.followRequestUser(userId)
                .then(response => {
                    response.data.resultCode === 0 && dispatch(follow(userId))
                }).catch(err => {
                console.log(err)
            }).finally(() => {
                dispatch(setFollowDisable(userId, false))
            })
            break;
        case "unfollow":
            dispatch(setFollowDisable(userId, true))
            followersAPI.unfollowRequestUser(userId)
                .then(response => {
                    response.data.resultCode === 0 && dispatch(unFollow(userId))
                }).catch(err => {
                console.log(err)
            }).finally(() => {
                dispatch(setFollowDisable(userId, false))
            })
            break;
        default:
            break;
    }
}

export default usersReducer