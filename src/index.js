import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const todoList = [
  {name:"EAT", done:true, id:"todo0"},
  {name:"SLEEP", done:false, id:"todo1"},
  {name:"REPEAT", done:false, id:"todo2"},
];

ReactDOM.render(
  <React.StrictMode>
    <App todoList={todoList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
