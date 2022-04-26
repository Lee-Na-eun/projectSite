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
            <NanniInteractionWrap>
                <div>Github</div>
                <div>Notion</div>
                <div>Email</div>
            </NanniInteractionWrap>
        </SecondWrap>
    )
}

export default Second;