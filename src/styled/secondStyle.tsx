import styled from 'styled-components';

export const SecondWrap = styled.div`
    height : 100vh;
    background-color : #081237;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

export const NanniChartWrap = styled.div`
    width : 800px;
    display: flex;
    > #nanniImg{
        width : 200px;
        height : 200px;
        background-color : white;
        border-radius : 200px;
    }
    > #nanniChartWrap{
        width : 500px;
        height : 200px;
    }
`;

export const NanniInteractionWrap = styled.div`
    height : 100px;
    width : 800px;
    display : flex;
    align-items : center;
    justify-content: space-between;
    > div {
        width : 200px;
        height : 40px;
        background-color : white;
        border-radius : 5px;
        line-height : 40px;
        font-size : 14px;
        color : #0E1C50;
    }
`;

export const ChartWrap = styled.div`
    display : flex;
    align-items : center;
    width : 600px;
`;

export const ChartLabelWrap = styled.div`
    width : 100px;
    height : 200px;
    margin-top : 0;
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
    color : white;
    > span {
        text-align : right;
        height : 30px;
        padding-right : 10px;
        line-height : 30px;
        font-size : 13px;
        display : block;
    }
`;

export const ChartBox = styled.div`
    width : 500px;
    height : 200px;
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
    > div {
        height : 30px;
    }
    > div:nth-child(1){
        width : 70%;
        background-color : #4A4372;
    }
    > div:nth-child(2){
        width : 80%;
        background-color : #545397;
    }
    > div:nth-child(3){
        width : 60%;
        background-color : #7472D0
    }
`;