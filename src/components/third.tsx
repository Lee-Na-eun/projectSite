import {
  ThirdWrap,
  ProjectTextWrap,
  ProjectWrap,
  ProjectGif,
  ProjectBox1,
  ProjectBox2
} from '../styled/thirdStyle';
import projectData from '../data/projectData';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { randomIndex, randomIndexStatus } from '../redux/random/randomIndex';

let ing = false;
let startSliding = false;
function Third() {
  const dispatch = useDispatch();
  const randomStatus = useSelector(randomIndexStatus);
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(index + 1);

  const indexInfinite = (event : any) => {
    event.stopPropagation();
    if(ing){
      return;
    }

    ing = true;
    startSliding = true;

    let findOverlap:number = Math.floor(Math.random() * 4);
    console.log('overlap : ', findOverlap);

    if(randomStatus.randomIndex === findOverlap){
        console.log('중복')
        if(randomStatus.randomIndex === 3){
          findOverlap = 0
        }else{
          findOverlap += 1;
        }
    }

    dispatch(randomIndex({ randomIndex: findOverlap}));

    if (index < 2) {
      setIndex(index + 1);
    } else if (index === 2) {
      setIndex(0);
    }

    if (nextIndex < 2) {
      setNextIndex(nextIndex + 1);
    } else if (nextIndex === 2) {
      setNextIndex(0);
    }

    setTimeout(() => {
      ing = false
    }, 1200);
  };
  // project 무한하게 돌게 해주기 위한 무한 index 값

  console.log('randomStatus : ', randomStatus.randomIndex);

  return (
    <ThirdWrap>
      <ProjectWrap onWheel={(indexInfinite)}>
        <div className={!startSliding ? undefined : `movingGone${randomStatus.randomIndex}`}>
          <ProjectBox2>
            <ProjectTextWrap>
              <h3>{projectData[index].title}</h3>
              <p>{projectData[index].desc}</p>
              <button><a href={projectData[index].url}>사이트 방문하기</a></button>
            </ProjectTextWrap>
            <ProjectGif style={{backgroundImage:projectData[index].gif}}></ProjectGif>
          </ProjectBox2>
        </div>
        <div className={!startSliding ? undefined : `movingCome${randomStatus.randomIndex}`}>
          <ProjectBox1>
            <ProjectTextWrap>
              <h3>{projectData[nextIndex].title}</h3>
              <p>{projectData[nextIndex].desc}</p>
              <button><a href={projectData[nextIndex].url}>사이트 방문하기</a></button>
            </ProjectTextWrap>
            <ProjectGif style={{backgroundImage:projectData[nextIndex].gif}}></ProjectGif>
          </ProjectBox1>
        </div>
      </ProjectWrap>
    </ThirdWrap>
  );
}

export default Third;
