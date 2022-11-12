import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {StateType} from "./types/types";
import store from "./redux/state";
let rerenderEntireTree=(state:StateType)=> {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)