import React,{useState} from 'react';
import './App.css';
import Main from './components/main';
import Second from './components/second';
import Third from './components/third';
import Nav from "./components/nav";

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
    }

    const wheelHandler = (e:any) => {
        e.stopPropagation();

        if(sliding){
            return;
        }

        sliding = true;
        startSliding = true;

        if(e.deltaY > 0){
            setIsDown(true);
            plus();
        }else{
            setIsDown(false);
            minus();
        }

        setTimeout(() => {
            sliding = false;
        }, 2000)
    }

    return <div className={"App"} onWheel={wheelHandler}>
        <Nav idx={idx} />
        <div className={!startSliding ? undefined : idx === 1 && isDown ? "animationUp1" : (startSliding &&  idx === 2 || (idx === 1 && !isDown) ? "stay" : "animationDown1")}>
            <Main />
        </div>
        <div className={idx === 2 && isDown ? "animationUp1" : (idx === 1 && !isDown) ? "animationDown2" : (idx === 0 && !isDown ? "animationUp2" : "animationUp3")}>
            <Second />
        </div>
        <div className={idx === 1 && !isDown ? "animationDown1" : (idx === 2 && isDown ? "animationUp3" : undefined)}>
            <Third />
        </div>
    </div>
}

export default App;