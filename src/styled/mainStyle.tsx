import styled from 'styled-components';
import '../App.css';
import nanniIllu from '../images/nanniIllu.png';

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
    @media (max-width: 500px) {
       width : 250px;
       height : 250px;
    }
    > #nanniImg {
        width : 200px;
        height : 200px;
        background-color : white;
        margin : 0 auto;
        border-radius : 200px;
        background-image : url(${nanniIllu});
        @media (max-width: 500px) {
            width : 150px;
            height : 150px;
            background-size : 150px;
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