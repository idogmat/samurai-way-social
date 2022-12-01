import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let rootReducer=combineReducers({
    dialogsReducer,
    profileReducer,
    menuReducer,
    usersReducer,
    authReducer
})
let store=createStore(rootReducer,applyMiddleware(thunkMiddleware))

export type AppStateType= ReturnType<typeof rootReducer>
export default store

// @ts-ignore
window.store = store;