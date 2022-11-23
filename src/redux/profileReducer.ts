import {PostType} from "../types/types";

const UPDATE_NEW_PROFILE_TEXT = 'UPDATE-NEW-PROFILE-TEXT';
const ADD_PROFILE_POST = 'ADD-PROFILE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

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
}
type ActionType = {
    type: 'UPDATE-NEW-PROFILE-TEXT' | 'ADD-PROFILE-POST' | 'SET-USER-PROFILE'
    text: string
    profile:ProfileUserType | null
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
    newPostText: 'redux handler'
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_PROFILE_POST:
            return [{id: state.posts.length, name: 'Yorik', message: state.newPostText, like: 999999}, ...state.posts]
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

        default:
            return state
    }

}

export const addPost = () => ({type: ADD_PROFILE_POST})
export const updateNewPostText = (text: string) => ({type: UPDATE_NEW_PROFILE_TEXT, text: text})
export const setUserProfile = (profile: ProfileUserType) => ({type: SET_USER_PROFILE, profile})
export default profileReducer