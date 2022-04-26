import {NavWrap, ButtonWrap, LogoWrap} from "../styled/navStyle";

function Nav () {
    return (
        <NavWrap>
            <div>
                <LogoWrap>Nanni</LogoWrap>
                <ButtonWrap>
                    <button>Main</button>
                    <button>Intro</button>
                    <button>View</button>
                </ButtonWrap>
            </div>
        </NavWrap>
    )
}

export default Nav