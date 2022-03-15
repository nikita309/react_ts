import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
              <Link to="/">Home</Link>
        </nav>
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
      </div>
      </Router>  
    </div>
  );
}


export default App;
