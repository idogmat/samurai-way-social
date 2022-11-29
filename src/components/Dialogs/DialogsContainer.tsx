import {DialogType, MessageType} from "../../types/types";
import {connect} from "react-redux";
import {
    addMessage,
    updateNewMessage,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType={
    dialogs:DialogType[]
    messages:MessageType[]
    newMessageText:string
    isAuth:boolean
}
let mapStateProps=(state:AppStateType):MapStatePropsType=>{
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageText:state.dialogsReducer.newMessageText,
        isAuth: state.authReducer.isAuth
    }
}
// let mapDispatchToProps=(dispatch:(action: any)=>void)=> {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator())
//         },
//         inputChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//             dispatch(updateNewMessageActionCreator(e.currentTarget.value))
//         }
//     }
// }
const DialogsContainer = connect(mapStateProps,{addMessage,updateNewMessage})(Dialogs)

export default DialogsContainer