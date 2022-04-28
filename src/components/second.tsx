import {SecondWrap, NanniChartWrap, NanniInteractionWrap} from '../styled/secondStyle'
import Chart from './chart'
import {useRef, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {scrollSecondNumber, scrollHeightStatus} from '../redux/scroll/secondScrollHeight'

function Second () {
    const dispatch = useDispatch();
    const scrollNumberStatus = useSelector(scrollHeightStatus);
    const scrollRef:any = useRef<null | HTMLButtonElement>(null);

    useEffect(() => {
        dispatch(scrollSecondNumber({secondScrollHeight : scrollRef.current.scrollHeight}));
    },[])

    console.log('aaa',scrollNumberStatus);

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