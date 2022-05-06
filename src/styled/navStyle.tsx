import styled from 'styled-components';
import '../App.css';

export const NavWrap = styled.div`
    height : 60px;
    width : 100vw;
    position : fixed;
    z-index : 100;
    > div {
        width : 90%;
        height : 60px;
        display : flex;
        justify-content: space-between;
        margin : 0 auto;
        align-items : center;
    }
`;

export const ButtonWrap = styled.div`
    width : 260px;
    height :30px;
    transition : 0.5s;
    display : flex;
    @media (max-width: 500px) {
        width : 60px;
        height : 150px;
        flex-direction : column;
        margin-top : 90px;
    }
    > button{
        margin-left : 10px; 
        width : 80px;
        height : 30px;
        background-color : white;
        border : none;
        border-radius : 30px;
        color : #0E1C50;
        cursor : pointer;
        display : block;
        @media (max-width: 500px) {
            margin-left : 0;
            margin-top : 10px;
            width : 40px;
            height : 40px;
            font-size : 10px;
        }
    }
    > button:nth-child(1){
        margin-left : 0;
    }
    > .currentPage{
        background-color : #557AFF;
        color : white;
        transition : 0.5s;
    }
`

export const LogoWrap = styled.div`
    font-family: 'Alfa Slab One', cursive;
    font-size : 25px;
    color : #fff;
`