import React, { useEffect } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';

import RoutineItem from '../../components/Routine/RoutineItem/index'
import AddRoutineButton from '../../components/Routine/AddRoutineButton/index'
import RoutineModal from '../../components/Routine/RoutineModal/index';
import CreateRoutineModal from '../../components/Routine/CreateRoutineModal/index';
import Layout from '../../layout/';
import Wrapper from './styles';
import { LOAD_MY_ROUTINES_REQUEST, LOAD_MY_HABITS_REQUEST, LOAD_ROUTINIZED_HABIT_REQUEST } from '../../reducers/routine';

function App (props) {
  const dispatch = useDispatch()
  const { myRoutines } = useSelector((state) => state.routine)

  useEffect(() => {
    dispatch({
      type: LOAD_MY_ROUTINES_REQUEST
    })
    dispatch({
      type: LOAD_MY_HABITS_REQUEST
    })
  }, [])

  return(
    <Layout>
      <Wrapper>
        <div className='menu daily-menu'><h1>Daily</h1><AddRoutineButton/></div>
        <hr/>
        {
            myRoutines.map((item, idx) => <RoutineItem num={idx} key={item?.id} />)
        }
        <RoutineModal/>
        <CreateRoutineModal/>
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