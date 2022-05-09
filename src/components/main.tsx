import {MainWrap, NanniInfoWrap} from '../styled/mainStyle'
import '../App.css'

function Main () {
    return (
        <MainWrap>
            <NanniInfoWrap>
                <div id="nanniBorder">
                    <div id="nanniImg"></div>
                </div>
                <div id="nickname">Nanni.</div>
                <div id="intro">
                    Front-end Developer
                </div>
            </NanniInfoWrap>
        </MainWrap>
    )
}

export default Main;