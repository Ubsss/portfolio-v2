import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import reducer from "./redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyB7NUyuwZ7v6zzGtw9pn0pUnY-FGY5lyHM",
  authDomain: "portfolio-site-8e4f6.firebaseapp.com",
  databaseURL: "https://portfolio-site-8e4f6.firebaseio.com",
  projectId: "portfolio-site-8e4f6",
  storageBucket: "portfolio-site-8e4f6.appspot.com",
  messagingSenderId: "193406269464",
  appId: "1:193406269464:web:b694f1dbe16c06adbaab6d",
  measurementId: "G-7R2ZQ3GZWM",
});

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
