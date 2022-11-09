import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {stateType} from "./types/types";
import {addPost, addPostMessage, updateNewPostMessage, updateNewPostText} from "./redux/state";
export let rerenderEntireTree=(state:stateType)=> {
    ReactDOM.render(
        <App state={state} addPost={addPost}
             updateNewPostText={updateNewPostText}
             addPostMessage={addPostMessage}
             updateNewPostMessage={updateNewPostMessage}
        />,
        document.getElementById('root')
    );
}
