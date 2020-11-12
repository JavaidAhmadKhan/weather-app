import React from "react";
import { useStateValue } from "./StateProvider";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import WeatherApi from "./WeatherApi";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <div className="app__body">
              <WeatherApi />
              <Header />
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
