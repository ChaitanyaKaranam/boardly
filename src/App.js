import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './styles/App.scss';
import './styles/Components.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
      <main>
        <Home/>
      </main>
    </div>
  );
}

export default App;
