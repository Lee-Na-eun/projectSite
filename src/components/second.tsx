import {SecondWrap, NanniChartWrap, NanniInteractionWrap} from '../styled/secondStyle'
import Chart from './chart'
import {useRef, useEffect} from "react";
import { useDispatch} from "react-redux";
import {scrollSecondNumber} from '../redux/scroll/secondScrollHeight'

function Second () {
    const dispatch = useDispatch();
    const scrollRef:any = useRef<null | HTMLButtonElement>(null);

    useEffect(() => {
        dispatch(scrollSecondNumber({secondScrollHeight : scrollRef.current.scrollHeight}));
    },[])

    return (
        <SecondWrap ref={scrollRef}>
            <NanniChartWrap>
                <div id="nanniImg"></div>
                <div id="nanniChartWrap">
                    <Chart />
                </div>
            </NanniChartWrap>
            <NanniInteractionWrap>
                <div>Github</div>
                <div>Notion</div>
                <div>Email</div>
            </NanniInteractionWrap>
        </SecondWrap>
    )
}

export default Second;