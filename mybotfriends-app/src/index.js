import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import 'tachyons';
import {robots} from './robots';
import reportWebVitals from './reportWebVitals';
import CardList from './CardList';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <FahadHello/>,
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
                <div>
                  <CardList robots={robots}/>


                </div>
                
                , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
