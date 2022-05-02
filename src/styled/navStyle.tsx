import styled from 'styled-components';
import '../App.css';

export const NavWrap = styled.div`
    height : 60px;
    width : 100vw;
    position : fixed;
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
    display : flex;
    justify-content: space-between;
    width : 270px;
    @media (max-width: 500px) {
        width : 80px;
        height : 120px;
        flex-direction : column;
        margin-top : 90px;
    }
    > button{
        width : 80px;
        height : 30px;
        background-color : white;
        border : none;
        border-radius : 30px;
        color : #0E1C50;
        cursor : pointer;
    }
`

export const LogoWrap = styled.div`
    font-family: 'Alfa Slab One', cursive;
    font-size : 25px;
    color : #fff;
`