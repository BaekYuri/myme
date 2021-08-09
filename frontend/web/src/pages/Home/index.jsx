import React, { useEffect } from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';
import ChallengeItem from '../../components/Home/ChallengeItem/index';
import RoutineListItem from '../../components/Home/RoutineListItem/index';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_ROUTINES_REQUEST } from '../../reducers/routine';
import {LOAD_MY_HABITS_REQUEST} from '../../reducers/habit';
import { LOAD_MY_CHALLENGES_REQUEST } from '../../reducers/challenge';

const App = () => {
  const dispatch = useDispatch()
  const { myRoutines } = useSelector((state) => state.routine)
  const { myChallenges } = useSelector((state) => state.challenge)

  useEffect(() => {
    dispatch({
      type: LOAD_MY_ROUTINES_REQUEST
    })
    dispatch({
      type: LOAD_MY_HABITS_REQUEST
    })
    dispatch({
      type: LOAD_MY_CHALLENGES_REQUEST
    })
  }, [])

  return(
    <Layout>
      <Wrapper>
        <div className='menu'><h1>나의 챌린지</h1></div>
        <hr/>
        {
          myChallenges.map((challenge) => {
            return <ChallengeItem key={challenge.id} challengeId={challenge.Challenge.name} />
          })
        }
        <div className='menu'><h1>나의 루틴 목록</h1></div>
        <hr/>
        {
          myRoutines.map((routine) => {
            return <RoutineListItem key={routine.id} routine={routine} />
          })
        }
      </Wrapper>
    </Layout>
  );
}

export default App