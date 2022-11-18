import users from "../components/Users/Users";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    id: number,
    fullName: string,
    status: string,
    followed: boolean,
    photoUrl:string
    location: {
        city: string,
        country: string
    }
}
export type UsersType = {
    users: UserType[]
}
export type ActionUserType = {
    type: string,
    userId?: number
    users?: any
}
const initialState: UsersType = {
    users: []
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
            return {...state, users:[...state.users,...action.users]}
        default:
            return state
    }
}
export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers =(users:UserType[])=>({type:SET_USERS,users})

export default usersReducer