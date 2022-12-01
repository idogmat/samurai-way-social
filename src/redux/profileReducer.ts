import {PostType} from "../types/types";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import axios from "axios";

const UPDATE_NEW_PROFILE_TEXT = 'UPDATE-NEW-PROFILE-TEXT';
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
} |null
export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
    currentProfile:ProfileUserType
    profileStatus:string
}
type ActionType = {
    type: 'UPDATE-NEW-PROFILE-TEXT' | 'ADD-PROFILE-POST' | 'SET-USER-PROFILE' |'SET-USER-STATUS'
    text: string
    profile:ProfileUserType | null
    status:string
}
let initialState = {
    posts: [{id: 1, name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 2, name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 3, name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 4, name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 5, name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 6, name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 7, name: 'Yorik', message: 'Hi lolz ', like: 5}
    ],
    currentProfile: null,
    profileStatus:'text',
    newPostText: 'redux handler'
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_PROFILE_POST:
            return {
                ...state,
                newPostText:'',
                posts: [{id: state.posts.length, name: 'Yorik', message: state.newPostText, like: 999999}, ...state.posts]
            }
        case UPDATE_NEW_PROFILE_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                currentProfile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                profileStatus:action.status
            }
        default:
            return state
    }

}

export const addPost = () => ({type: ADD_PROFILE_POST})
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_PROFILE_TEXT, text: text})
export const setUserProfile = (profile: ProfileUserType) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status: string) => ({type: SET_USER_STATUS, status})
export const getProfileStatusThunkCreator=(userId:string)=>(dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                console.log(response)
                dispatch(setProfileStatus(response.data))
            }).catch(e=>console.warn(e))
}
export const updateProfileStatusThunkCreator=(status:string)=> (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                console.log(response)
                if(response.data.resultCode === 0) {
                    dispatch(setProfileStatus(response.data))
                }
            }).catch(e=>console.warn(e))

}
export const getProfileUserThunkCreator=(userId:string)=>(dispatch:Dispatch)=> {
        if (!userId) userId = '2'
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            }).catch(e=>console.warn(e))

}

export default profileReducer