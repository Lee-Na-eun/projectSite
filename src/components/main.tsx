import {MainWrap, NanniInfoWrap} from '../styled/mainStyle'
import {useSelector, useDispatch} from "react-redux";
import {indexDown, indexUp, pageIndexStatus} from "../redux/scroll/nowPageIndex";
import '../App.css'

let sliding = false;

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