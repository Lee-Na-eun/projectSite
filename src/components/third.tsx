import {ThirdWrap, ProjectTextWrap, ProjectWrap, ProjectBox, ProjectGif} from "../styled/thirdStyle";
import projectData from '../data/projectData'

function Third () {
    // function scrollTest ():void{
    //     console.log('hi')
    // }

    return (
        <ThirdWrap>
            <ProjectWrap>
                {projectData.map((el) => <ProjectBox>
                    <ProjectTextWrap>
                        <h3>{el.title}</h3>
                        <p>{el.desc}</p>
                    </ProjectTextWrap>
                    <ProjectGif></ProjectGif>
                </ProjectBox>)}
            </ProjectWrap>
        </ThirdWrap>
    )
}

export default Third;