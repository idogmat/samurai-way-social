const UPDATE_NEW_PROFILE_TEXT:string = 'UPDATE-NEW-PROFILE-TEXT';
const ADD_PROFILE_POST:string = 'ADD-PROFILE-POST';
export const profileReducer=(state:any,action:any)=>{
    switch (action.type){
        case ADD_PROFILE_POST:
            let newPost = {id: state.posts.length, name: 'Yorik', message:state.newPostText, like: 999999};
            state.posts.push(newPost)
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
