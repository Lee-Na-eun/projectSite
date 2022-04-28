import {SecondWrap, NanniChartWrap, NanniInteractionWrap} from '../styled/secondStyle'
import Chart from './chart'
import {useRef} from "react";

function Second () {
    const scrollRef:any = useRef<null | HTMLButtonElement>(null);

    const testRef = () => {
        console.log(typeof(scrollRef.current));
        console.log(scrollRef.current.scrollHeight)
    }

    return (
        <SecondWrap ref={scrollRef}>
            <NanniChartWrap>
                <div onClick={testRef} id="nanniImg"></div>
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