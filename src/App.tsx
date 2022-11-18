import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppType = {
    state: any
    dispatch: (action: any) => void

}
interface AppContextInterface {
    name: string;
}
export const MyContext=React.createContext<any>(null)
const App: React.FC<AppType> = ({state, dispatch}) => {

    return (
        <BrowserRouter>

            <main className="app-wrapper">
                <Header/>
                <Menu sidebar={state.menuReducer.sidebar}/>
                <div className={'content'}>
                    {/*<img src="https://www.extremetech.com/wp-content/uploads/2013/11/eso1348a-crop-640x353.jpg" alt=""/>*/}
                    <Route path={'/profile'} render={() => <Profile
                        profile={state.profileReducer}
                        dispatch={dispatch}/>}
                    />
                    <Route path={'/messages'} render={() => <DialogsContainer
                        messages={state.dialogsReducer}
                        dispatch={dispatch}
                    />}/>

                    <Route path={'/news'} render={() =>
                        <MyContext.Provider value={'from App with love'}>
                            <News/>

                        </MyContext.Provider>
                            }/>

                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    {/*<Route component={MyPosts}/>*/}
                </div>
            </main>
        </BrowserRouter>
    );
}


export default App;
