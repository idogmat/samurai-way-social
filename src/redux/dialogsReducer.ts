import {DialogType, MessageType} from "../types/types";

const ADD_MESSAGE = 'ADD-MESSAGE';
type MessagesPageType = {
    dialogs: DialogType[],
    messages: MessageType[],

}
export type DialogsActionType = ReturnType<typeof addMessage>

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


}
const dialogsReducer = (state: MessagesPageType = initialState, action: DialogsActionType): MessagesPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length, message: action.message, isYou: true}]
            }
        default:
            return state
    }

}
export const addMessage = (message: string) => ({type: ADD_MESSAGE, message})as const
export default dialogsReducer