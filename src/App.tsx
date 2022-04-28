import React from 'react';
import './App.css';
import Main from './components/main';
import Second from './components/second';
import Third from './components/third';
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Second />
      <Third />
    </div>
  );
}

export default App;
