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
    justify-content: space-between;
    @media (max-width: 900px) {
        width : 80%;
        height : 430px;
        flex-direction : column;
        justify-content: space-between;
        align-items : center;
    }
    @media (max-width : 500px) {
        height : 380px;
    }
    > #nanniImg{
        width : 200px;
        height : 200px;
        background-color : white;
        border-radius : 200px;
        @media (max-width: 500px) {
            width : 150px;
            height : 150px;
        }
    }
    > #nanniChartWrap{
        width : 580px;
        height : 200px;
        @media (max-width: 900px) {
            width : 100%;
        }
    }
`;

export const NanniInteractionWrap = styled.div`
    height : 100px;
    width : 800px;
    display : flex;
    align-items : center;
    justify-content: space-between;
    @media (max-width: 900px) {
        width : 80%;
    }
    > div {
        width : 200px;
        height : 40px;
        background-color : white;
        border-radius : 5px;
        line-height : 40px;
        font-size : 14px;
        color : #0E1C50;
        @media (max-width: 900px) {
            width : 30%;
        }
        @media (max-width: 500px) {
            height : 30px;
            line-height : 30px;
            font-size : 12px;
        }
    }
`;

export const ChartWrap = styled.div`
    display : flex;
    align-items : center;
    
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
        padding-right : 20px;
        line-height : 30px;
        font-size : 13px;
        display : block;
    }
`;

export const ChartBox = styled.div`
    width : 100%;
    height : 200px;
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
    border : 1px solid #fff;
    box-sizing: border-box;
    border-radius : 10px;
    > div {
        height : 30px;
        @media (max-width: 500px) {
            height : 20px;
        }
    }
    > div:nth-child(1){
        width : 70%;
        background-color : #4A4372;
    }
    > div:nth-child(2){
        width : 70%;
        background-color : #545397;
    }
    > div:nth-child(3){
        width : 50%;
        background-color : #7472D0
    }
`;