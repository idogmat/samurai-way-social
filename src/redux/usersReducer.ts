const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS = 'SET-TOTAL-USERS'
const SET_FETCHING = 'SET-FETCHING'

export type UserType = {
    id: number,
    name: string,
    status: string,
    followed: boolean,
    photos:{
        small:string
        large:string
    }

}
export type UsersType = {
    users: UserType[],
    pageSize:number,
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}
export type ActionUserType = {
    type: string,
    userId?: number
    users?: any
    currentPage?:number
    totalUsers?:number
    fetch?:boolean

}
const initialState: UsersType = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false
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
            return {...state, users:[...action.users]}
        case SET_CURRENT_PAGE:
            return{...state,currentPage:action.currentPage}
        case SET_TOTAL_USERS:
            return{...state,totalUsersCount:action.totalUsers}
        case SET_FETCHING:
            return{...state,isFetching:action.fetch}
        default:
            return state
    }
}
export const follow = (userId: number) => ({type: FOLLOW, userId})as const
export const unFollow = (userId: number) => ({type: UNFOLLOW, userId})as const
export const setUsers =(users:UserType[])=>({type:SET_USERS,users})as const
export const setCurrentPage =(currentPage:number)=>({type:SET_CURRENT_PAGE,currentPage})as const
export const setTotalUsersCount =(totalUsers:number)=>({type:SET_TOTAL_USERS,totalUsers})as const
export const setFetching =(fetch:boolean)=>({type:SET_FETCHING,fetch})as const

export default usersReducer