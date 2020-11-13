import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoApp from "./TodoList";

//Das ist scheinbar die "Main" Methode. Hier werden die Componenten importiert und über REACT DOM gerendert.
ReactDOM.render(
    <React.StrictMode>
        <App/>
        <TodoApp/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
