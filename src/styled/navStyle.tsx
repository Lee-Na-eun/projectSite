import styled from 'styled-components';
import '../App.css';

export const NavWrap = styled.div`
    height : 60px;
    width : 100%;
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
    > button{
        width : 80px;
        height : 30px;
        margin-left : 15px;
        background-color : white;
        border : none;
        border-radius : 30px;
        color : #0E1C50;
    }
`

export const LogoWrap = styled.div`
    font-family: 'Alfa Slab One', cursive;
    font-size : 25px;
    color : #fff;
`