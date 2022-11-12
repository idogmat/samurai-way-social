import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {StateType, StoreType} from "./types/types";
import store from "./redux/state";
let rerenderEntireTree=(state:StateType)=> {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}
             addPostMessage={store.addPostMessage.bind(store)}
             updateNewPostMessage={store.updateNewPostMessage.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)