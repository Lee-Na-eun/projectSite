import styled from 'styled-components';

export const ThirdWrap = styled.div`
    height : 100vh;
    background-color : #262B3E;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const ProjectWrap = styled.div`
    width : 800px;
    height : 500px;
    background-color : red;
    overflow : scroll;
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
    > #color {
        background-color : pink;
    }
`;

export const ProjectBox = styled.div`
    height : 500px;
    width : 800px;
    background-color : orange;
`;

export const ProjectTextWrap = styled.div`
    
`;