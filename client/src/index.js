import { createRoot } from 'react-dom/client';
import App from './components/App';
import React from 'react';
import { UserContext, UserProvider } from './components/UserContext'
import './index.css'


const root = document.getElementById('root');
createRoot(root).render(
  <UserProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById("root")
// );