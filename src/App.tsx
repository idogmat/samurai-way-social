import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
// import MyPosts from "./components/MyPosts/MyPosts";
import Dialogs from "./components/Dialogs/Dialogs";

import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {StateType} from "./types/types";


 // interface IAppProps{//settings for function component work with props
 //     state: {
 //         profilePage: object[],
 //         sidebar: {
 //             friends:Array<object>
 //             menu:Array<object>
 //         },
 //         messagesPage: {
 //             dialogs: object[],
 //             messages: object[]
 //         }
 //     }}

type AppType ={
    state:StateType
    dispatch:(action:any)=>void

}

const App:React.FC<AppType>=({state,dispatch}) => {

    return (
        <BrowserRouter>
            <main className="app-wrapper">
                <Header/>
                <Menu sidebar={state.sidebar}/>
                <div className={'content'}>
                    {/*<img src="https://www.extremetech.com/wp-content/uploads/2013/11/eso1348a-crop-640x353.jpg" alt=""/>*/}
                    <Route path={'/profile'} render={()=><Profile
                        profile={state.profilePage}
                        dispatch={dispatch}/>}
                    />
                    <Route path={'/messages'} render={()=><Dialogs
                        messages={state.messagesPage}
                        dispatch={dispatch}
                    />}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>
                    {/*<Route component={MyPosts}/>*/}
                </div>
            </main>
        </BrowserRouter>
    );
}


export default App;
