import {Dispatch} from "redux";
import {loginAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {useDispatch} from "react-redux";

const SET_USER_DATA = 'SET-USER-DATA'
const SET_FETCHING = 'SET-FETCHING'
const LOGOUT_USER = 'LOGOUT-USER'

export type UserLoginType = {
    email: string
    password: string
    rememberMe: boolean
}

export type AuthUserStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean

}
export type AuthUserType = {
    id: number | null
    email: string | null
    login: string | null
}
const initialState: AuthUserStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export type setUserDataType = ReturnType<typeof setUserData>
export type setUserFetchingType = ReturnType<typeof setFetching>
export type logoutUserType = ReturnType<typeof logoutUser>


const authReducer = (state = initialState, action: logoutUserType | setUserDataType | setUserFetchingType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.user,
                isAuth: true
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.fetch
            }
        case LOGOUT_USER:
            return {
                ...state,
                id: null, email: null, login: null, isAuth: false
            }
        default:
            return state
    }
}
export const setUserData = (user: AuthUserType) => ({type: SET_USER_DATA, user}) as const
export const setFetching = (fetch: boolean) => ({type: SET_FETCHING, fetch}) as const
export const logoutUser = () => ({type: LOGOUT_USER}) as const
export const setUserThunkCreator = () => (dispatch: Dispatch) => {
    dispatch(setFetching(false))
    loginAPI.authMe()
        .then(response => {
            console.log(response, 'auth')
            if (response.resultCode === 0) {
                dispatch(setUserData({...response.data}))
                dispatch(setFetching(true))
            }
        }).catch(err => {
        throw new Error(err)
    })
}

export const loginUserTC = (user: UserLoginType) => (dispatch: Dispatch) => {
    console.log(user)
    loginAPI.login(user.email, user.password, user.rememberMe)
        .then(res => {
            console.log(res)
            if (res.data.resultCode === 0) {
                setUserThunkCreator()(dispatch)
            } else {
                //redux-form submit breaker
                dispatch(stopSubmit("login", {email: res.data.messages, password: res.data.messages}))
            }
        })
}
export const logoutUserTC = () => (dispatch: Dispatch) => {
    loginAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(logoutUser())
            }
        })
}

export default authReducer