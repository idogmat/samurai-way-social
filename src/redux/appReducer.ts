import {setUserThunkCreator} from "./authReducer";
import {AppThunkType} from "./redux-store";


const SET_INITIALIZED = 'SET-INITIALIZED'
const initialState: any = {
    initialized: false,

}
export type InitialiseActionType = ReturnType<typeof setInitializedSuccess>

const appReducer = (state = initialState, action: InitialiseActionType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export const setInitializedSuccess = () => ({type: SET_INITIALIZED}) as const
export const setInitializeAppTC = ():AppThunkType => (dispatch) => {
    let dispatchResult = dispatch<any>(setUserThunkCreator())
    console.log(dispatchResult)
    dispatchResult.then(() => dispatch<any>(setInitializedSuccess()))
}

export default appReducer