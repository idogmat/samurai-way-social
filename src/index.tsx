import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
//for maping
const state= {
    postsArr : [{id: 1, message: 'Hi lolz ', like: 5},
        {id: 2, message: 'Hi lolz ', like: 5},
        {id: 3, message: 'Hi lolz ', like: 5},
        {id: 4, message: 'Hi lolz ', like: 5},
        {id: 5, message: 'Hi lolz ', like: 5},
        {id: 6, message: 'Hi lolz ', like: 5},
        {id: 7, message: 'Hi lolz ', like: 5}],
    dialogsArr : [{id: 1, name: 'Jack'},
        {id: 2, name: 'Sam'},
        {id: 3, name: 'Cheed'},
        {id: 4, name: 'Yorik'},
        {id: 5, name: 'Marri'},
        {id: 6, name: 'Alla'},
        {id: 7, name: 'Julce'}],
    messagesArr : [{id: 1, message: 'Hi lolz '},
        {id: 2, message: 'Hi lolz '},
        {id: 3, message: 'Hi lolz '},
        {id: 4, message: 'Hi lolz '},
        {id: 5, message: 'Hi lolz '},
        {id: 6, message: 'Hi lolz '},
        {id: 7, message: 'Hi lolz '}]
}
ReactDOM.render(

    <App posts={state.postsArr} messages={state.messagesArr} dialogs={state.dialogsArr}/>,
  document.getElementById('root')
);