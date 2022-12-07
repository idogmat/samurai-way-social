import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MenuContainer from "./components/Menu/MenuContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

export const MyContext = React.createContext<any>(null)

const App = () => {
    return (
        <main className="app-wrapper">
            <HeaderContainer/>
            <MenuContainer/>
            <div className={'content'}>
                {/*<img src="https://www.extremetech.com/wp-content/uploads/2013/11/eso1348a-crop-640x353.jpg" alt=""/>*/}
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                <Route path={'/messages'} render={() => <DialogsContainer/>}/>

                <Route path={'/news'} render={() =>
                    <MyContext.Provider value={'from App with love'}>
                        <News/>

                    </MyContext.Provider>
                }/>

                <Route path={'/users'} render={() => <UsersContainer/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/login'} render={() => <Login/>}/>
            </div>
        </main>
    );
}


export default App;
