import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import menuReducer from "./menuReducer";

let reducers=combineReducers({
    dialogsReducer,
    profileReducer,
    menuReducer
})
let store=createStore(reducers)


export default store