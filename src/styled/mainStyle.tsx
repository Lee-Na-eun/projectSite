import styled, {keyframes} from 'styled-components';
import '../App.css';
import nanniIllu from '../images/nanniIllu.png';

export  const borderAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const MainWrap = styled.div`
    height : 100vh;
    background-color : #0E1C50;
    display : flex;
    justify-content: center;
    align-items : center;
`;

export const NanniInfoWrap = styled.div`
    width : 300px;
    height : 300px;
    transition : 0.5s;
    @media (max-width: 500px) {
       width : 250px;
       height : 250px;
    }
    > #nanniBorder {
        display : flex;
        justify-content : center;
        align-items : center;
        width : 215px;
        height : 215px;
        // background : linear-gradient(45deg,#1448FF, #C214FF, #FF14A1);
        background: linear-gradient(45deg,#1448FF, #C214FF, red);
        animation: ${borderAnimation} 5s ease infinite;
        background-size: 200% 100%;
        margin : 0 auto;
        border-radius : 250px;
        @media (max-width: 500px) {
            width : 165px;
            height : 165px;
        }
        > #nanniImg {
        width : 200px;
        height : 200px;
        background-color : white;
        margin : 0 auto;
        border-radius : 200px;
        background-image : url(${nanniIllu});
        background-repeat : no-repeat;
        @media (max-width: 500px) {
            width : 150px;
            height : 150px;
            background-size : 150px;
        }
    }
    }
    > #nickname, #intro {
        height : 50px;
        font-family: 'Alfa Slab One', cursive;
        color : white;
    }
    > #nickname {
        line-height : 50px;
        font-size : 20px;
    }
`;