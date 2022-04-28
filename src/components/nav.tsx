import {NavWrap, ButtonWrap, LogoWrap} from "../styled/navStyle";
import {useSelector} from "react-redux";
import {scrollHeightStatus} from '../redux/scroll/secondScrollHeight'

function Nav () {
    const scrollNumberStatus = useSelector(scrollHeightStatus);

    const moveScrollTop = ():void =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const moveSecondScrollFix = ():void => {
        window.scrollTo({
            top : scrollNumberStatus.secondFindTagHeight.secondScrollHeight,
            behavior: 'smooth',
        })
    }

    const moveThirdScrollFix = ():void => {
        window.scrollTo({
            top : 100000,
            behavior: 'smooth',
        })
    }

    return (
        <NavWrap>
            <div>
                <LogoWrap>Nanni</LogoWrap>
                <ButtonWrap>
                    <button onClick={moveScrollTop}>Main</button>
                    <button onClick={moveSecondScrollFix}>Intro</button>
                    <button onClick={moveThirdScrollFix}>View</button>
                </ButtonWrap>
            </div>
        </NavWrap>
    )
}

export default Nav