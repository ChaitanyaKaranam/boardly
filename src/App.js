import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Boards from './components/Boards';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import './styles/Components.scss';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
          <Header/>
      </header>
      <main>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/boards">
              <Boards/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
      </main>
      </Router>        
    </div>
  );
}

export default App;
