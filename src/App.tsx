import React, {useEffect} from 'react';
import './App.scss';
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import MenuContainer from "./components/Menu/MenuContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitializeAppTC} from "./redux/appReducer";
import {withSuspense} from "./hoc/withSuspense";

import Login from "./components/Login/Login";
import Preloader from "./components/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
export const MyContext = React.createContext<any>(null)
type AppType = {
  initialized: boolean
  setInitializeAppTC: () => void
}
const App = (props: AppType) => {
  const catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {
    console.warn(event)
  }
  useEffect(() => {
    props.setInitializeAppTC()
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
  }, [])

  if (!props.initialized) {
    return <Preloader/>
  }
  return props.initialized ? <main className="app-wrapper">
      <HeaderContainer/>
      <MenuContainer/>
      <div className={'content'}>
        <Route path={'/profile/:userId?'} render={withSuspense(ProfileContainer)}/>
        <Route path={'/messages'} render={withSuspense(DialogsContainer)}/>
        <Route path={'/news'} render={() =>
          <MyContext.Provider value={'from App with love'}>
            <News/>

          </MyContext.Provider>
        }/>
        <Route path={'/users'} render={withSuspense(UsersContainer)}/>
        <Route path={'/music'} render={() => <Music/>}/>
        <Route path={'/settings'} render={() => <Settings/>}/>
        <Route path={'/login'} render={() => <Login/>}/>
      </div>
    </main>
    : <div></div>


}

const mapState = (state: any) => state.appReducer

export default compose<React.ComponentType>(
  connect(
    mapState, {setInitializeAppTC}),
  withRouter
)(App)