import {DialogType, MessageType} from "../types/types";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
type MessagesPageType={
    dialogs: DialogType[],
    messages: MessageType[],
    newMessageText: string
}
type ActionType={
    type:'ADD-MESSAGE'|'UPDATE-NEW-MESSAGE-TEXT'
    text:string
}
const dialogsReducer=(state:MessagesPageType,action:ActionType)=>{
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {id: state.messages.length, message:state.newMessageText, isYou: true};
            state.messages.push(newMessage)
            state.newMessageText=''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText=action.text
            return state
        default:
            return state
    }

}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export default dialogsReducer