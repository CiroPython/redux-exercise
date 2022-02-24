import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import "antd/dist/antd.css";
import {applyMiddleware, combineReducers, createStore} from "redux";
import reportWebVitals from './reportWebVitals';
import ReduxThunk from "redux-thunk";
import userReducer from "./reducers";

const rootReducer = combineReducers({
  users: userReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk)
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);
reportWebVitals();
