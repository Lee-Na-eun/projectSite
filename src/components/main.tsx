import {MainWrap, NanniInfoWrap} from '../styled/mainStyle'
import {useSelector, useDispatch} from "react-redux";
import {indexDown, indexUp, pageIndexStatus} from "../redux/scroll/nowPageIndex";
import '../App.css'

let sliding = false;

function Main (props:any) {

    console.log('idx=', props.idx)
    // const dispatch = useDispatch();
    // const pageStatus = useSelector(pageIndexStatus);
    //
    // const test = () => {
    //     window.addEventListener('wheel', (event) => {
    //         if(sliding){
    //             return;
    //         }
    //
    //         sliding = true;
    //
    //         if(event.deltaY > 0){
    //             console.log("down");
    //             dispatch(indexUp());
    //         }else{
    //             console.log("up");
    //             dispatch(indexDown());
    //         }
    //     })
    //
    //     setTimeout(() => {
    //         sliding = false;
    //     }, 2000)
    // }
    //
    // console.log(pageStatus.findPageIndex.pageIndex);
    //
    // if(pageStatus.findPageIndex.pageIndex === 1){
    //     console.log("2페이지로 넘어가요~")
    // }


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