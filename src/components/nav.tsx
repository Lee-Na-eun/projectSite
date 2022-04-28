import {NavWrap, ButtonWrap, LogoWrap} from "../styled/navStyle";
import {useRef} from "react";

function Nav () {

    // const scrollRef:any = useRef<null | HTMLButtonElement>(null);
    //
    // const testRef = () => {
    //     console.log(typeof(scrollRef.current));
    //     console.log(scrollRef.current.scrollHeight)
    // }

    function moveScrollTop ():void{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <NavWrap>
            <div>
                <LogoWrap>Nanni</LogoWrap>
                <ButtonWrap>
                    <button onClick={moveScrollTop}>Main</button>
                    <button>Intro</button>
                    <button>View</button>
                </ButtonWrap>
            </div>
        </NavWrap>
    )
}

export default Nav