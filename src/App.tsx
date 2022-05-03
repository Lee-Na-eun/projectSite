import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import Main from './components/main';
import Second from './components/second';
import Third from './components/third';
import Nav from "./components/nav";

let ing = false;

function App() {
    const pageHeight = window.innerHeight;
    const outerDivRef:any = useRef<null | HTMLDivElement>();

    const fullPageScroll = () => {
        window.addEventListener('wheel', function(event){
            if(ing){
                return;
            }

            ing = true;

            if(event.deltaY < 0){
                console.log("scrollY : ", window.scrollY);
                console.log("pageHeight : ", pageHeight)
                if(window.scrollY <= pageHeight){
                    window.scrollTo({
                        top : 0,
                        behavior : "smooth"
                    })
                }else {
                    window.scrollTo({
                        top : pageHeight,
                        behavior : "smooth"
                    })
                }
                setTimeout(() => {
                    console.log('scrolling up');
                    ing = false;
                }, 200);

            }else if(event.deltaY > 0){
                if(window.scrollY >= 0 && window.scrollY < pageHeight){
                    window.scrollTo({
                        top : pageHeight,
                        behavior : "smooth"
                    })
                }else if(window.scrollY >= pageHeight && window.scrollY < pageHeight * 2){
                    window.scrollTo({
                        top : pageHeight * 2,
                        behavior : "smooth"
                    })
                }
                setTimeout(() => {
                    console.log('scrolling down');
                    ing = false;
                }, 200);
            }
        })
    }

    console.log(pageHeight);

    return (
        <div className="App" onWheel={fullPageScroll} ref={outerDivRef}>
            <Nav />
            <Main />
            <Second />
            <Third />
        </div>
    );
}

export default App;