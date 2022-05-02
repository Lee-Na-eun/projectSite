import jurimma from '../images/ddoJurimma.gif';
import todays from '../images/todaysChef.gif';
import happyNew from '../images/happyNewYear.gif';

type ProjectData = {
    title : string,
    desc : string,
    gif : string,
    url : string
}

const projectDatas:Array<ProjectData> = [
    {title : 'DDO_Jurimma', desc : "세상의 모든 줄임말을 모두 담았다! 줄임말을 찾아도 보고, 등록도 해보고, 매일 퀴즈를 하면서 레벨업을 즐겨보자!", gif : "gif", url : `url(${jurimma})`},
    {title : 'Todays-Chef', desc : "레스토랑 쉐프의 음식을 내 집에서 즐겨볼 수 있는 기회가 있다면? 다양한 메뉴를 확인하고 최고 정상에 있는 쉐프들을 초대해보자!", gif : "gif", url : `url(${todays})`},
    {title : 'Happy-NewYear', desc : "새해는 밝았고 여전히 계획이 없는 당신. 현재 내 상황을 테스트 해보고 계획을 짜고 알찬 일년을 보내보자!", gif : "gif", url : `url(${happyNew})`}
];

export default projectDatas;