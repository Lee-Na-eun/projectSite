import styled from 'styled-components';
import '../App.css';
import {movingScrollRandom} from "./animation";

export const ThirdWrap = styled.div`
  height: 100vh;
  width : 100vw;
  background-color: #262b3e;
  display: flex;
  justify-content: center;
  align-items: center;
  position : absolute;
  top : 0;
  z-index : -1;
`;

export const ProjectWrap = styled.div`
  width: 800px;
  height: 450px;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 500px;
    height: 450px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
  @media (max-width: 300px) {
    width: 240px;
  }
`;

export const ProjectTextWrap = styled.div`
  width: 330px;
  text-align: left;
  color: white;
  > h3 {
    font-size: 22px;
  }
  > p {
    font-size: 13px;
    line-height: 28px;
  }
  > button {
    width : 120px;
    height : 30px;
    background-color:transparent;
    border : 2px solid #fff;
    border-radius : 6px;
    > a {
      text-decoration : none;
      color : #fff;
      font-size : 5px;
      display : block;
    }
  }
  @media (max-width: 500px) {
    width: 240px;
  }
`;

export const ProjectBox1 = styled.div`
    height: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
      flex-direction: column;
      height: 450px;
      justify-content: center;
    }
  `;

export const ProjectBox2 = styled.div`
    height: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 900px) {
      flex-direction: column;
      height: 450px;
      justify-content: center;
    }
  `;

export const ProjectGif = styled.div`
  height: 300px;
  width: 450px;
  background-color: white;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  // width : calc(100% - 330px - 15px);
  // height : 30%;
  @media (max-width: 900px) {
    width: 330px;
    height: 220px;
  }
  @media (max-width: 500px) {
    width: 240px;
    height: 160px;
  }
`;
