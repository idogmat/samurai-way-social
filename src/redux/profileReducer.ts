import {PostType} from "../types/types";

const UPDATE_NEW_PROFILE_TEXT:string = 'UPDATE-NEW-PROFILE-TEXT';
const ADD_PROFILE_POST:string = 'ADD-PROFILE-POST';
type ProfilePageType={
    posts: PostType[],
    newPostText: string
}
type ActionType={
    type:'UPDATE-NEW-PROFILE-TEXT'|'ADD-PROFILE-POST'
    text:string
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
        newPostText: 'redux handler'
}
const profileReducer=(state:ProfilePageType=initialState,action:ActionType)=>{
    switch (action.type){
        case ADD_PROFILE_POST:
            let newPost = {id: state.posts.length, name: 'Yorik', message:state.newPostText, like: 999999};
            state.posts.unshift(newPost)
            state.newPostText=''
            return state
        case UPDATE_NEW_PROFILE_TEXT:
            state.newPostText=action.text
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_PROFILE_POST})
export const updateNewPostTextActionCreator = (text: string) => ({type: UPDATE_NEW_PROFILE_TEXT, text: text})
export default profileReducer