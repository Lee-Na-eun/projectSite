import {NavWrap, ButtonWrap, LogoWrap} from "../styled/navStyle";

function Nav () {
    return (
        <NavWrap>
            <div>
                <LogoWrap>Nanni</LogoWrap>
                <ButtonWrap>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </ButtonWrap>
            </div>
        </NavWrap>
    )
}

export default Nav