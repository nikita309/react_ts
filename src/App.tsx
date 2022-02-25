import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' element={<Home/>} />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      </div>
      </Router>  
  

    </div>
  );
}

export default App;
