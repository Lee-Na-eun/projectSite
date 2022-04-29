import {ThirdWrap, ProjectTextWrap, ProjectWrap, ProjectGif,movingScrollRandom} from "../styled/thirdStyle";
import projectData from '../data/projectData'
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {randomIndex, randomIndexStatus} from "../redux/random/randomIndex";
import styled, {keyframes} from "styled-components";


function Third () {
    const dispatch = useDispatch();
    const randomStatus = useSelector(randomIndexStatus);
    const [index, setIndex] = useState(0);
    const [booleanSlide, setBooleanSlide] = useState(false);

    const indexInfinite = () => {

        dispatch(randomIndex({randomIndex : Math.floor(Math.random() * 4)}));
        setBooleanSlide(true);

        if(index < 2){
            setIndex(index + 1);
        }else if(index === 2){
            setIndex(0);
        }

        console.log(randomStatus.randomIndex)
    }
    // project 무한루프 돌게 해주기 위한 무한 index 값

    // const ProjectBox2 = styled.div`
    //     height : 450px;
    //     display : flex;
    //     justify-content: space-between;
    //     align-items : center;
    //     animation: ${movingScroll} 2s ease;
    //     @media (max-width: 900px) {
    //         flex-direction : column;
    //         height : 450px;
    //         justify-content: center;
    //     }
    // `;

    const goneScroll = keyframes`
       ${movingScrollRandom[0].gone}       
    `;

    const comeScroll = keyframes`
       ${movingScrollRandom[0].come}       
    `;

    const ProjectBox1 = styled.div`
        height : 450px;
        display : flex;
        justify-content: space-between;
        align-items : center;
        animation: ${comeScroll} 2s ease forwards;
        @media (max-width: 900px) {
            flex-direction : column;
            height : 450px;
            justify-content: center;
        }
    `;

    const ProjectBox2 = styled.div`
        height : 450px;
        display : flex;
        justify-content: space-between;
        align-items : center;
        // animation: ${goneScroll} 2s ease forwards;
        @media (max-width: 900px) {
            flex-direction : column;
            height : 450px;
            justify-content: center;
        }
    `;

    console.log(booleanSlide)

    return (
        <ThirdWrap>
            <ProjectWrap onWheel={indexInfinite}>
                <ProjectBox2 style={
                    booleanSlide
                        ? {
                            animation: `${goneScroll} 2s ease forwards`
                        }
                        : {
                           animation : "none"
                        }
                }>
                    <ProjectTextWrap>
                        <h3>{projectData[0].title}</h3>
                        <p>{projectData[0].desc}</p>
                    </ProjectTextWrap>
                    <ProjectGif></ProjectGif>
                </ProjectBox2>
                <ProjectBox1>
                    <ProjectTextWrap>
                        <h3>{projectData[1].title}</h3>
                        <p>{projectData[1].desc}</p>
                    </ProjectTextWrap>
                    <ProjectGif></ProjectGif>
                </ProjectBox1>
            </ProjectWrap>
        </ThirdWrap>
    )
}

export default Third;