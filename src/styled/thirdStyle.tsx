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
    height : 500px;
    overflow : scroll;
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

export const ProjectBox = styled.div`
    height : 500px;
    width : 800px;
    display : flex;
    justify-content: space-between;
    align-items : center;
`;

export const ProjectTextWrap = styled.div`
    width : 330px;
    height : 200px;
    text-align : left;
    color : white;
    > h3 {
        font-size : 22px;
    }
    > p {
        font-size : 13px;
        line-height : 28px;
    }
`;

export const ProjectGif = styled.div`
    width : 450px;
    height : 300px;
    background-color : white;
    border-radius : 10px;
`;