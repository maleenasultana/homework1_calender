
import React from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import store from "./store/store";
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calander</h1>
        <Provider store={store}>
          <Calendar/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
