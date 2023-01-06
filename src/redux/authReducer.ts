import {loginAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppActionTypes, AppStateType, AppThunkType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = 'SET-USER-DATA'
const SET_FETCHING = 'SET-FETCHING'
const LOGOUT_USER = 'LOGOUT-USER'
const GET_CAPTCHA_URL = "GET-CAPTCHA-URL"

export type UserLoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha:string|null
}

export type AuthUserStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
    captcha:string|null

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
    isAuth: false,
    captcha:null
}
export type AuthActionType = ReturnType<typeof setUserData>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof logoutUser>
    | ReturnType<typeof setCaptcha>


const authReducer = (state = initialState, action: AuthActionType) => {

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
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captcha: action.captcha
            }
        default:
            return state
    }
}
export const setUserData = (user: AuthUserType) => ({type: SET_USER_DATA, user}) as const
export const setFetching = (fetch: boolean) => ({type: SET_FETCHING, fetch}) as const
export const logoutUser = () => ({type: LOGOUT_USER}) as const
export const setCaptcha = (captcha:string) => ({type: GET_CAPTCHA_URL,captcha}) as const
export const setUserThunkCreator = (): ThunkAction<Promise<boolean>, AppStateType, unknown, AppActionTypes> =>async (dispatch) => {
    dispatch(setFetching(false))
    let res = await loginAPI.authMe()
    try {
        if (res.resultCode === 0) {
            dispatch(setUserData({...res.data}))
        }
    }catch (e){
        console.warn(e)
    }finally {
        dispatch(setFetching(true))
    }
    return true

}

export const loginUserTC = (user: UserLoginType): AppThunkType => async (dispatch) => {
    let res = await loginAPI.login(user.email, user.password, user.rememberMe,user.captcha)
    try {
        if (res.data.resultCode === 0) {
            dispatch(setUserThunkCreator())
        } else if(res.data.resultCode === 10){
            dispatch(getCaptchaUrl())
            //redux-form submit breaker
        } else{
            dispatch(stopSubmit("login", {email: res.data.messages, password: res.data.messages}))

        }
    } catch (e) {
        console.warn(e)
    }
}
export const logoutUserTC = (): AppThunkType => async (dispatch) => {
    let res = await loginAPI.logout()
    try {
        if (res.data.resultCode === 0) {
            dispatch(logoutUser())
        }
    } catch (e) {
        console.warn(e)
    }
}
export const getCaptchaUrl=():AppThunkType=>async (dispatch)=>{
    let res = await loginAPI.getCaptchaUrl()
    const captcha = res.data.url
    dispatch(setCaptcha(captcha))
}
export default authReducer