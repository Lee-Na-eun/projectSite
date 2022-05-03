import React, {useState} from 'react';
import './App.css';
import Main from './components/main';
import Second from './components/second';
import Third from './components/third';
import Nav from "./components/nav";

function App() {
    const [isFirstDown, setIsFirstDown] = useState("first");

    const slidingPage = () => {
        window.addEventListener('wheel', (event) => {
            if(event.deltaY > 0){
                setIsFirstDown("second");
            }else{
                setIsFirstDown("first");
            }
        })
    }

    if(isFirstDown === "second"){
        return <div className="App" onWheel={slidingPage}>
            <Nav />
            <Second />
        </div>
    }else if(isFirstDown === "first"){
        return <div className="App" onWheel={slidingPage}>
            <Nav />
            <Main />
        </div>
    }

    return (
        <div className="App" onWheel={slidingPage}>
            <Nav />
        </div>
    );
}

export default App;