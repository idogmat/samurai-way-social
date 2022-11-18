import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";
import usersReducer from "./usersReducer";

let rootReducer=combineReducers({
    dialogsReducer,
    profileReducer,
    menuReducer,
    usersReducer
})
let store=createStore(rootReducer)

export type AppStateType= ReturnType<typeof rootReducer>
export default store