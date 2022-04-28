import {ThirdWrap, ProjectTextWrap, ProjectWrap, ProjectGif} from "../styled/thirdStyle";
import projectData from '../data/projectData'
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {randomIndex, randomIndexStatus} from "../redux/random/randomIndex";
import styled, {keyframes} from "styled-components";


function Third () {
    const dispatch = useDispatch();
    const randomStatus = useSelector(randomIndexStatus);
    const [index, setIndex] = useState(0);

    const indexInfinite = () => {

        dispatch(randomIndex({randomIndex : Math.floor(Math.random() * 4)}))

        if(index < 2){
            setIndex(index + 1);
        }else if(index === 2){
            setIndex(0);
        }
    }

    // project 무한루프 돌게 해주기 위한 무한 index 값

    const movingScrollRandom = [`0% {
        transform : translate(100%,0);
    }
        100%{
            transform : translate(0,0);
        }`, ` 0% {
          transform : translate(-100%,0);
        }
        100%{
            transform : translate(0,0);
        }`, ` 0% {
          transform : translate(0,100%);
        }
        100%{
            transform : translate(0,0);
        }`, `0% {
          transform : translate(0,-100%);
        }
        100%{
            transform : translate(0,0);
        }`]

    const movingScroll = keyframes`
       ${movingScrollRandom[randomStatus.randomIndex]}
    `;

    const ProjectBox = styled.div`
        height : 450px;
        display : flex;
        justify-content: space-between;
        align-items : center;
        animation: ${movingScroll} 2s ease;
        @media (max-width: 900px) {
            flex-direction : column;
            height : 450px;
            justify-content: center;
        }
    `;

    return (
        <ThirdWrap>
            <ProjectWrap onWheel={indexInfinite}>
                <ProjectBox key={index}>
                    <ProjectTextWrap>
                        <h3>{projectData[index].title}</h3>
                        <p>{projectData[index].desc}</p>
                    </ProjectTextWrap>
                    <ProjectGif></ProjectGif>
                </ProjectBox>
            </ProjectWrap>
        </ThirdWrap>
    )
}

export default Third;