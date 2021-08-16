import React, { useEffect } from 'react';
import Wrapper from './styles'

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    Paper
  } from '@material-ui/core';
import RoutineItemCheck from '../RoutineItemCheck/index';
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux';
import { SET_CHOOSED_ROUTINE } from '../../../reducers/routine';

const App = (props) => {
  const dispatch = useDispatch()
  const { routine, routineIdx } = props
  const { choosedRoutine } = useSelector((state) => state.routine)
  function getDay(){
    let day = moment()
    return day.day()
  }

  function getTime(time){
    let timeArr = time.split(':')
    
    let am= Math.floor(timeArr[0]/12)==0?'오전':'오후'
    let hour= timeArr[0]%12==0?12:timeArr[0]%12
    return am+' '+hour+':'+timeArr[1]
  }

  function handleChange(e, isExpanded){
    dispatch({type: SET_CHOOSED_ROUTINE, idx:isExpanded?routineIdx:-1})
  }
  return(
    <Wrapper>
      <Accordion className="panel" className='routine-list-item' expanded={choosedRoutine === routineIdx} onChange={handleChange}>
        <AccordionSummary
          className={routine.DailyAchieveRoutines.length?"panel-summary panel-summary-success":"panel-summary"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className="title">{routine.name} | {getTime(routine.RoutineActiveDays[getDay()].start_time)} 시작</h3>
        </AccordionSummary>
        <AccordionDetails className='routine-list-item-detail'>
          <List className='accordian-detail-list'>
            {
              routine.RoutinizedHabits && routine.RoutinizedHabits.length!=0
                ? (
                  routine.RoutinizedHabits.map((habit, idx) => {
                    return (
                      <ListItem className='items' key={idx}>
                        <RoutineItemCheck habit={habit} routineIdx={routineIdx} routinizedHabitIdx={idx} />
                      </ListItem>
                    )
                  })
                )
                : <ListItem className='items'>
                    <Paper style={{height:'66px', lineHeight:'66px',padding: "0px 16px",width: "100%"}}><h3>설정된 습관이 없어요!</h3></Paper>
                </ListItem>
            }
          </List>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
}

export default App;
