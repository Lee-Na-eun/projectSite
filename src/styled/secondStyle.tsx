import styled from 'styled-components';

export const SecondWrap = styled.div`
    height : 100vh;
    background-color : orange;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

export const NanniChartWrap = styled.div`
    width : 60%;
    background-color : red;
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
        background-color : #fff;
    }
`;

export const NanniInteractionWrap = styled.div`
    height : 100px;
    width : 60%;
    background-color : pink;
`;