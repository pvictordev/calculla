// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'; 
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

const calc = 'calc';

const inputClick = () => console.log('clicked');

const elements = (<div className="inputField">
  <h1>{calc}</h1>
  <input placeholder={calc} onClick={inputClick}/>
</div>);

//const app = document.getElementById("app"); 

const app = ReactDOMClient.createRoot(document.getElementById("app")); 

app.render(elements)
