import React from 'react';
import './App.css';
import Main from './components/main';
import Second from './components/second';
import Third from './components/third';
import Nav from "./components/nav";
import {useState} from "react";

function App() {
    type HeightNumber = {
        scrollHeight : number
    }
    const [scrollHeight, setScrollHeight] = useState<HeightNumber>({scrollHeight : 0});

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
