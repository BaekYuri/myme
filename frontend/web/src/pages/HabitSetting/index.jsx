import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../../layout/';
import Wrapper from './styles';
import { Grid } from '@material-ui/core';
import HabitListItem from '../../components/Habit/HabitListItem/index'
import {LOAD_MY_HABITS_REQUEST, SET_MODIFY_HABIT_MODAL} from '../../reducers/habit'
import {OPEN_MODIFY_HABIT_MODAL} from '../../reducers/modal'
import AddRoutineButton from '../../components/Routine/AddRoutineButton/index'

function App (props) {
  const dispatch = useDispatch()
  const { myHabits } = useSelector((state) => state.habit)

  useEffect(() => {
    dispatch({
      type: LOAD_MY_HABITS_REQUEST,
    })
  }, [])
  function openModal(){
    dispatch({type:OPEN_MODIFY_HABIT_MODAL})
    dispatch({type:SET_MODIFY_HABIT_MODAL, idx:-1})
  }

  return(
    <Layout>
      <Wrapper>
      <div className='menu daily-menu'><h2>Habit</h2><AddRoutineButton onClick={openModal} title='습관 생성'/></div>
        <hr/>
        <Grid container>
          {
            myHabits.map((item, idx)=>(<HabitListItem key={idx} idx={idx} habit={item} />))
          }
        </Grid>
      </Wrapper>
    </Layout>
  );
}

export default App;