import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogsActionType} from "./dialogsReducer";
import profileReducer, {ProfileActionType} from "./profileReducer";
import menuReducer from "./menuReducer";
import usersReducer, {ActionUserType} from "./usersReducer";
import authReducer, {AuthActionType} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer, {InitialiseActionType} from "./appReducer";

let rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
    menuReducer,
    usersReducer,
    authReducer,
    appReducer,
    form: formReducer
})
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionTypes = AuthActionType
    | InitialiseActionType
    | DialogsActionType
    | ProfileActionType
    | ActionUserType
export type AppThunkType<ReturnType=void>=ThunkAction<ReturnType, AppStateType, unknown, AppActionTypes>
export default store

// @ts-ignore
window.store = store;