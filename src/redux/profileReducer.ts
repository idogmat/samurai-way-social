import {PostType} from "../types/types";
import {profileAPI} from "../api/api";
import {AppThunkType} from "./redux-store";
import {stopSubmit} from "redux-form";

const ADD_PROFILE_POST = 'ADD-PROFILE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
export type PhotosType = {
    small: string
    large: string
}
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
    photos: PhotosType
} | null
export type ProfilePageType = {
    posts: PostType[],
    currentProfile: ProfileUserType
    profileStatus: string
}
export type ProfileActionType = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setProfileStatus>
|ReturnType<typeof setUserPhoto>
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
        case SET_USER_PHOTO: {
            if (action.photos) {
                return {
                    ...state, profile: {...state.currentProfile, photos: action.photos}
                }
            }
            return state

        }
        default:
            return state
    }

}

export const addPost = (message: string) => ({type: ADD_PROFILE_POST, message}) as const
export const setUserProfile = (profile: ProfileUserType) => ({type: SET_USER_PROFILE, profile}) as const
export const setProfileStatus = (status: string) => ({type: SET_USER_STATUS, status}) as const
export const setUserPhoto = (photos: PhotosType | null) => {
    return {
        type: SET_USER_PHOTO,
        photos
    } as const
}
export const getProfileStatusThunkCreator = (userId: string): AppThunkType => async (dispatch) => {
    let res = await profileAPI.getStatus(userId)
    try {
        dispatch(setProfileStatus(res.data))
    } catch (e) {
        console.warn(e)
    }
}
export const updateProfileStatusThunkCreator = (status: string): AppThunkType => async (dispatch) => {
    let res = await profileAPI.updateStatus(status)
    try {
        if (res.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    } catch (e) {
        console.warn(e)
    }
}
export const getProfileUserThunkCreator = (userId: string): AppThunkType => async (dispatch) => {
    let res = await profileAPI.getProfile(userId)
    try {
        dispatch(setUserProfile(res.data))
    } catch (e) {
        console.warn(e)
    }
}
export const savePhoto = (file: string): AppThunkType => async (dispatch ,getState) => {
    const response = await profileAPI.savePhoto(file)
    const userId = getState().authReducer.id
    if (response.data.resultCode === 0) {
        console.log(response)
        dispatch(setUserPhoto(response.data.data.photos))
        dispatch(getProfileUserThunkCreator(userId+''))
    }
}

export default profileReducer