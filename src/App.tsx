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

function App() {
    return (
        <BrowserRouter>
            <main className="app-wrapper">
                <Header/>
                <Menu/>
                <div className={'content'}>
                    <img src="https://www.extremetech.com/wp-content/uploads/2013/11/eso1348a-crop-640x353.jpg" alt=""/>
                    <Route path={'/profile'} component={Profile}/>
                    <Route path={'/messages'} component={Dialogs}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    {/*<Route component={MyPosts}/>*/}
                </div>
            </main>
        </BrowserRouter>
    );
}


export default App;
