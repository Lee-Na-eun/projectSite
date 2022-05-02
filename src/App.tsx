import React, {useState} from 'react';
import './App.css';
import Main from './components/main';
import Second from './components/second';
import Third from './components/third';
import Nav from "./components/nav";

let ing = false;

function App() {
    const [nowFullPage, setNowFullPage] = useState(0);
    const fullPageScroll = () => {
        window.addEventListener('wheel', function(event){
            if(ing){
                return;
            }

            ing = true;

            if(event.deltaY < 0){
                setTimeout(() => {
                    console.log('scrolling up');
                    ing = false;
                }, 800);

            }else if(event.deltaY > 0){
                setTimeout(() => {
                    setNowFullPage(1);
                    console.log('scrolling down');
                    ing = false;
                }, 800);
            }
        })
    }



    return (
        <div className="App" onWheel={fullPageScroll}>
            <Nav />
            <div id={"test"}>
                <Main />
            </div>
            <Second />
            <Third />
        </div>
    );
}

export default App;