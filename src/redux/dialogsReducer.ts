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

let initialState = {
        dialogs: [{
            id: 1,
            name: 'Jack',
            img: 'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'
        },
            {
                id: 2,
                name: 'Sam',
                img: 'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'
            },
            {
                id: 3,
                name: 'Cheed',
                img: 'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'
            },
            {
                id: 4,
                name: 'Yorik',
                img: 'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'
            },
            {
                id: 5,
                name: 'Marri',
                img: 'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'
            },
            {
                id: 6,
                name: 'Alla',
                img: 'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'
            },
            {
                id: 7,
                name: 'Julce',
                img: 'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'
            }],
        messages: [{id: 1, message: 'Hi lolz ', isYou: true},
            {id: 2, message: 'Hi lolz ', isYou: true},
            {id: 3, message: 'Hi lolz ', isYou: false},
            {id: 4, message: 'Hi lolz ', isYou: true},
            {id: 5, message: 'Hi lolz ', isYou: false},
            {id: 6, message: 'Hi lolz ', isYou: true},
            {id: 7, message: 'Hi lolz ', isYou: false}],
        newMessageText: 'redux handler messages'

}
const dialogsReducer=(state:MessagesPageType=initialState,action:ActionType):MessagesPageType=>{
    switch (action.type){
        case ADD_MESSAGE:
            let newState1 = {...state,message: [...state.messages]}
            let newMessage = {id: state.messages.length, message:state.newMessageText, isYou: true};
            newState1.messages.push(newMessage)
            newState1.newMessageText=''
            return newState1
        case UPDATE_NEW_MESSAGE_TEXT:
            let newState2 =  {...state}
            newState2.newMessageText=action.text
            return newState2
        default:
            return state
    }

}
export const addMessage = () => ({type: ADD_MESSAGE})
export const updateNewMessage = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export default dialogsReducer