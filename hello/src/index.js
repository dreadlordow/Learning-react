import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClassApp from './ClassApp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

const names = ['ivan', 'petur', 'georgi']
const number = 5
ReactDOM.render(
  <React.StrictMode>
    {/* <App names = { names }/> */}
    <ClassApp counter={1} counter2={2} number={number} flag={true} name={'georgi'} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
