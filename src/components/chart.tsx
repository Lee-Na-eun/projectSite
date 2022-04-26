import {ChartLabelWrap, ChartWrap, ChartBox} from '../styled/secondStyle'

function Chart () {

    return (
        <ChartWrap>
            <ChartLabelWrap>
                <span>Javascript</span>
                <span>React</span>
                <span>Deployment</span>
            </ChartLabelWrap>
            <ChartBox>
                <div></div>
                <div></div>
                <div></div>
            </ChartBox>
        </ChartWrap>
    )
}

export default Chart