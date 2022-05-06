import React,{useState} from 'react';
import './App.css';
import Main from './components/main';
import Second from './components/second';
import Third from './components/third';
import Nav from "./components/nav";
import {keyframes} from "styled-components";

let sliding = false;
let startSliding = false;
function App() {
    const [idx, setIdx] = useState(0);
    const [isDown, setIsDown] = useState(false);

    const plus = () => {
        if(idx < 2){
            setIdx(idx + 1);
        }
    }

    const minus = () => {
        if(idx > 0){
            setIdx(idx - 1);
        }
        console.log(idx);
    }

    const wheelHandler = (e:any) => {
        if(sliding){
            return;
        }

        sliding = true;
        startSliding = true;

        if(e.deltaY > 0){
            console.log("down")
            setIsDown(true);
            plus();
        }else{
            console.log("up")
            setIsDown(false);
            minus();
        }

        // if(e.deltaY > 0){
        //     if(idx === 1){
        //         console.log("2페이지로 전환");
        //     }else if(idx === 1){
        //         console.log("3페이지로 전환");
        //     }
        // }

        setTimeout(() => {
            sliding = false;
        }, 2000)
    }

    console.log("App - idx",idx);
    console.log("isDown? : ", isDown);
    console.log("startSliding", startSliding);

    return <div className={"App"} onWheel={wheelHandler}>
        <Nav />
        <div className={idx === 1 && isDown ? "animationUp1" : (idx === 2 || (idx === 1 && !isDown) ? "stay" : "animationDown1")}>
            <Main idx={idx} />
        </div>
        <div className={idx === 2 && isDown ? "animationUp1" : (idx === 1 && !isDown) ? "animationDown2" : (idx === 0 && !isDown  ? "animationUp2" : "animationUp3")}>
            <Second />
        </div>
        <div className={idx === 1 && !isDown ? "animationDown1" : (idx === 2 && isDown ? "animationUp3" : undefined)}>
            <Third />
        </div>
    </div>
}

export default App;