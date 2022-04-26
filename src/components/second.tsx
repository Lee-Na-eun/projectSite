import {SecondWrap, NanniChartWrap, NanniInteractionWrap} from '../styled/secondStyle'
import Chart from './chart'

function Second () {
    return (
        <SecondWrap>
            <NanniChartWrap>
                <div id="nanniImg"></div>
                <div id="nanniChartWrap">
                    <Chart />
                </div>
            </NanniChartWrap>
            <NanniInteractionWrap></NanniInteractionWrap>
        </SecondWrap>
    )
}

export default Second;