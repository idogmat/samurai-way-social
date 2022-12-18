import {PostType} from "../types/types";
import {profileAPI} from "../api/api";
import {AppThunkType} from "./redux-store";

const ADD_PROFILE_POST = 'ADD-PROFILE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

export type ProfileUserType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
} | null
export type ProfilePageType = {
    posts: PostType[],
    currentProfile: ProfileUserType
    profileStatus: string
}
export type ProfileActionType = ReturnType<typeof addPost>
|ReturnType<typeof setUserProfile>
|ReturnType<typeof setProfileStatus>
let initialState = {
    posts: [{id: 1, name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 2, name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 3, name: 'Yorik', message: 'Hi lolz ', like: 5}
    ],
    currentProfile: null,
    profileStatus: '',
}
const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_PROFILE_POST:
            return {
                ...state,
                posts: [{id: state.posts.length, name: 'Yorik', message: action.message, like: 999999}, ...state.posts]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                currentProfile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                profileStatus: action.status
            }
        default:
            return state
    }

}

export const addPost = (message: string) => ({type: ADD_PROFILE_POST, message}) as const
export const setUserProfile = (profile: ProfileUserType) => ({type: SET_USER_PROFILE, profile}) as const
export const setProfileStatus = (status: string) => ({type: SET_USER_STATUS, status}) as const
export const getProfileStatusThunkCreator = (userId: string):AppThunkType =>async (dispatch) => {
    let res = await profileAPI.getStatus(userId)
        try{
            dispatch(setProfileStatus(res.data))
        }catch(e){
            console.warn(e)
        }
}
export const updateProfileStatusThunkCreator = (status: string):AppThunkType =>async (dispatch) => {
    let res = await profileAPI.updateStatus(status)
        try{
            if (res.data.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        }catch(e){
            console.warn(e)
        }
}
export const getProfileUserThunkCreator = (userId: string):AppThunkType =>async (dispatch) => {
    let res = await profileAPI.getProfile(userId)
        try{
            dispatch(setUserProfile(res.data))
        }catch(e){
            console.warn(e)
        }
}

export default profileReducer