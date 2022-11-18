import React from "react";
import {DialogType, MessageType} from "../../types/types";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType={
    dialogs:DialogType[]
    messages:MessageType[]
    newMessageText:string
}
let mapStateProps=(state:AppStateType):MapStatePropsType=>{
    return state.dialogsReducer
}
let mapDispatchToProps=(dispatch:(action: any)=>void)=> {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        inputChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageActionCreator(e.currentTarget.value))
        }
    }
}
const DialogsContainer = connect(mapStateProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer