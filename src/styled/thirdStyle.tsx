import styled from 'styled-components';
import '../App.css';

export const ThirdWrap = styled.div`
  height: 100vh;
  background-color: #262b3e;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const movingScrollRandom = [
  {
    gone: `0% {
        transform : translate(0,0);
        }
        100%{
            transform : translate(-110%,0);
        }`,
    come: `0% {
        transform : translate(100%,-100%);
        }
        100%{
            transform : translate(0,-100%);
        }`,
  },
  {
    gone: ` 0% {
          transform : translate(0,0);
        }
        100%{
            transform : translate(110%,0);
        }`,
    come: ` 0% {
          transform : translate(-100%,-100%);
        }
        100%{
            transform : translate(0,-100%);
        }`,
  },
  {
    gone: ` 0% {
          transform : translate(0,0);
        }
        100%{
            transform : translate(0,100%);
        }`,
    come: ` 0% {
          transform : translate(0,-200%);
        }
        100%{
            transform : translate(0,-100%);
        }`,
  },
  {
    gone: `0% {
          transform : translate(0,0);
        }
        100%{
            transform : translate(0,-100%);
        }`,
    come: `0% {
          transform : translate(0,0);
        }
        100%{
            transform : translate(0,-100%);
        }`,
  },
];

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
