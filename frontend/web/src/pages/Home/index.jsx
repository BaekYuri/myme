import React, { useEffect } from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';
import ChallengeItem from '../../components/Home/ChallengeItem/index';
import RoutineListItem from '../../components/Home/RoutineListItem/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_ROUTINES_REQUEST } from '../../reducers/routine';
function App(){
  const dispatch = useDispatch()
  const { myRoutines } = useSelector((state) => state.routine)  

  useEffect(() => {
    dispatch({
      type: LOAD_MY_ROUTINES_REQUEST
    })
  }, [])

  return(
    <Layout>
      <Wrapper>
        <div className='menu'><h1>나의 챌린지</h1></div>
        <hr/>
        <ChallengeItem challengeId='CS 공부'></ChallengeItem>
        <ChallengeItem challengeId='30분 독서'></ChallengeItem>
        <ChallengeItem challengeId='코딩테스트 문제 풀기'></ChallengeItem>
        <div className='menu'><h1>나의 루틴 목록</h1></div>
        <hr/>
        {
          myRoutines.map((v) => {
            return <RoutineListItem key={v.id} routine={v} />
          })
        }
      </Wrapper>
    </Layout>
  );
}
const mapStateToProps = (state) =>{
    return {
        state
    }
}
export default connect(mapStateToProps)(App);