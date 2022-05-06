import {NavWrap, ButtonWrap, LogoWrap} from "../styled/navStyle";
// import {useSelector} from "react-redux";
// import {scrollHeightStatus} from '../redux/scroll/secondScrollHeight'

function Nav (props:any) {

    return (
        <NavWrap>
            <div>
                <LogoWrap>Nanni</LogoWrap>
                <ButtonWrap>
                    <button className={props.idx === 0 ? "currentPage" : undefined}>Main</button>
                    <button className={props.idx === 1 ? "currentPage" : undefined}>Intro</button>
                    <button className={props.idx === 2 ? "currentPage" : undefined}>View</button>
                </ButtonWrap>
            </div>
        </NavWrap>
    )
}

export default Nav