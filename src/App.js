import React from "react";
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SeriesSection from "./Components/SeriesSection/SeriesSection";
import MovieSection from "./Components/MovieSection/MovieSection";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/series">
          <SeriesSection></SeriesSection>
        </Route>
        <Route path="/movie">
          <MovieSection></MovieSection>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
