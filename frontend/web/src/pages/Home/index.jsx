import React from 'react';

import Layout from '../../layout';
import Wrapper from './styles';
import ChallengeItem from '../../components/Home/ChallengeItem/index';
import RoutineListItem from '../../components/Home/RoutineListItem/index';
function App(){
    
    return(
        <Wrapper>
            <Layout>
                <div className='menu'><h1>나의 챌린지</h1></div>
                <hr/>
                <ChallengeItem challengeId='CS 공부'></ChallengeItem>
                <ChallengeItem challengeId='30분 독서'></ChallengeItem>
                <ChallengeItem challengeId='코딩테스트 문제 풀기'></ChallengeItem>
                <div className='menu'><h1>나의 루틴 목록</h1></div>
                <hr/>
                <RoutineListItem routineId='아침 루틴'></RoutineListItem>
                <RoutineListItem routineId='저녁 루틴'></RoutineListItem>
            </Layout>
        </Wrapper>
    );
}
export default App;