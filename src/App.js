import React from "react";
import "./style.css";
import Home from './components/Home';
import store from './redux/store';
import { Provider } from 'react-redux'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}
