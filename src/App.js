import React from 'react';
import './App.css';
import HomeScreen from './screens/Home';
import Redirect from './screens/Redirect';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route
          exact path="/"
          render={() => (
            <HomeScreen />
          )}
        />
        <Route render={props => (<Redirect {...props} />)}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
