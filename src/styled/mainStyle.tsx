import styled from 'styled-components';
import '../App.css';

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
    > #nanniImg {
        width : 200px;
        height : 200px;
        background-color : white;
        margin : 0 auto;
        border-radius : 200px;
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