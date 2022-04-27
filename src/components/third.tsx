import {ThirdWrap, ProjectTextWrap, ProjectWrap, ProjectBox} from "../styled/thirdStyle";

function Third () {
    function scrollTest ():void{
        console.log('hi')
    }

    return (
        <ThirdWrap>
            <ProjectWrap>
                <ProjectBox>
                </ProjectBox >
                <ProjectBox id={"color"}>
                </ProjectBox >
            </ProjectWrap>
        </ThirdWrap>
    )
}

export default Third;