import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let rootReducer=combineReducers({
    dialogsReducer,
    profileReducer,
    menuReducer,
    usersReducer,
    authReducer
})
let store=createStore(rootReducer)

export type AppStateType= ReturnType<typeof rootReducer>
export default store