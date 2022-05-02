import {MainWrap, NanniInfoWrap} from '../styled/mainStyle'
import nanniIllu from '../images/nanniIllu.png';


function Main () {
    return (
        <MainWrap>
            <NanniInfoWrap>
                <div id="nanniImg">
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