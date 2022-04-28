import styled from 'styled-components';
import '../App.css';

export const ThirdWrap = styled.div`
    height : 100vh;
    background-color : #262B3E;
    display : flex;
    justify-content : center;
    align-items : center;   
`;

export const ProjectWrap = styled.div`
    width : 800px;
    height : 450px;
    overflow:hidden;
    @media (max-width: 900px) {
        width : 500px;
        height : 450px;
    }
    @media (max-width: 500px) {
        width : 300px;
    }
    @media (max-width: 300px) {
        width : 240px;
    }
`;


export const ProjectTextWrap = styled.div`
    width : 330px;
    text-align : left;
    color : white;
    > h3 {
        font-size : 22px;
    }
    > p {
        font-size : 13px;
        line-height : 28px;
    }
    @media (max-width: 500px) {
        width : 240px;
    }
`;

export const ProjectGif = styled.div`
    height : 300px;
    width : 450px;
    background-color : white;
    border-radius : 10px;
    // width : calc(100% - 330px - 15px);
    // height : 30%;
    @media (max-width: 900px) {
        width : 330px;
        height : 220px;
    }
    @media (max-width: 500px) {
        width : 240px;
        height : 160px;
    }
    
`;