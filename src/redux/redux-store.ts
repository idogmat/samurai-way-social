import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
    menuReducer,
    usersReducer,
    authReducer,
    form: formReducer
})
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
export default store

// @ts-ignore
window.store = store;