import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";

import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/MyPosts/MyPosts";

function App() {
  return (
    <main className="app-wrapper">
        <Header/>
        <Menu/>
        <div className={'content'}>
            <img src="https://www.extremetech.com/wp-content/uploads/2013/11/eso1348a-crop-640x353.jpg" alt=""/>
            <Profile/>
            <MyPosts/>
        </div>

        {/*<MyPosts/>*/}
    </main>
  );
}


export default App;
