import {DialogType, MessageType} from "../../types/types";
import {connect} from "react-redux";
import {
    addMessage,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/AuthRedirectComponent";
import {compose} from "redux";


type MapStatePropsType={
    dialogs:DialogType[]
    messages:MessageType[]

}
let mapStateProps=(state:AppStateType):MapStatePropsType=>{
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,

    }
}
export default compose<React.ComponentType>(
    connect(mapStateProps,{
        addMessage}),
    withAuthRedirect)(Dialogs)