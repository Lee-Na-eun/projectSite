import React,{useState} from 'react';
import './App.css';
import Main from './components/main';
import Second from './components/second';
import Third from './components/third';
import {keyframes} from "styled-components";

let aaa = false;
function App() {
    const [idx, setIdx] = useState(0);
    const [sliding, setSliding] = useState(false);
    const [classes, setClasses] = useState("App");

    const plus = () => {
        if(idx < 2){
            setIdx(idx + 1);
            // setClasses("");
        }
        console.log(idx);
    }

    const minus = () => {
        if(idx > 0){
            setIdx(idx - 1);
        }
        setSliding(true);
        console.log(idx);
    }

    const wheelHandler = (e:any) => {
        if(aaa){
            return;
        }

        aaa = true;

        if(e.deltaY > 0){
            console.log("down")
            plus();
            setSliding(true);
        }else{
            console.log("up")
            minus();
        }

        setTimeout(() => {
            aaa = false;
        }, 2000)
    }



    console.log("sliding", sliding);

    return <div className={classes} onWheel={wheelHandler}>
        <Main idx={idx} />
        <Second />
        <Third />
    </div>

    // if(idx === 0){
    //     return <div className={classes} onWheel={wheelHandler} style={sliding ? {animation : `${sliding} 2s ease`} : {}}>
    //         <Main />
    //     </div>
    // }else if(idx === 1){
    //     return <div className={classes} onWheel={wheelHandler}>
    //         <Second />
    //     </div>
    //
    // }else{
    //     return <div className={classes} onWheel={wheelHandler}>
    //         <Third />
    //     </div>
    // }
}

export default App;