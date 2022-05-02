import {SecondWrap, NanniChartWrap, NanniInteractionWrap} from '../styled/secondStyle'
import Chart from './chart'
import {useRef, useEffect, useState} from "react";
import { useDispatch} from "react-redux";
import {scrollSecondNumber} from '../redux/scroll/secondScrollHeight'

function Second () {
    const dispatch = useDispatch();
    const scrollRef:any = useRef<null | HTMLButtonElement>(null);
    const [chageEmail, setChageEmail] = useState(false);

    useEffect(() => {
        dispatch(scrollSecondNumber({secondScrollHeight : scrollRef.current.scrollHeight}));
    },[]);


    const showEmail = () => {
        {
            !chageEmail ? setChageEmail(true) : setChageEmail(false);
        }
    }

    return (
        <SecondWrap ref={scrollRef}>
            <NanniChartWrap>
                <div id="nanniBorder">
                    <div id="nanniImg"></div>
                </div>
                <div id="nanniChartWrap">
                    <Chart />
                </div>
            </NanniChartWrap>
            <NanniInteractionWrap>
                <div><a href={"https://github.com/Lee-Na-eun"}>Github</a></div>
                <div><a href={"https://www.notion.so/s-ce038d21a206441e827e48dd4e3668bd"}>Notion</a></div>
                <div onClick={showEmail}>{chageEmail ? 'nanni4287@gmail.com' : 'Email'}</div>
            </NanniInteractionWrap>
        </SecondWrap>
    )
}

export default Second;