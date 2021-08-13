import React from 'react';
import Wrapper from './styles'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Checkbox
  } from '@material-ui/core';
import ProgressItem from '../ProgressItem/index';
import {connect} from 'react-redux';

function App(props){
  const { habit, routineIdx, routinizedHabitIdx } = props

  const dailyAchieveHabits = props.habit.DailyAchieveHabits

  function isChecked(){
    if(dailyAchieveHabits!= undefined && dailyAchieveHabits.length){
      return true
    }
    return false
  }
    return (
        <Wrapper>
            <Accordion className="panel" className='routine-item-check'>
                <AccordionSummary
                  className="check-summary"
                  aria-controls="panel1a-content"
                >
                  <h3>{habit.Habit.name}</h3>
                  <Checkbox color='primary' className='Mui-disabled' checked={isChecked()}></Checkbox>
                </AccordionSummary>
                <AccordionDetails>
                  <ProgressItem habit={habit} routineIdx={routineIdx} routinizedHabitIdx={routinizedHabitIdx} checked={isChecked()}/>
                </AccordionDetails>
              </Accordion>
        </Wrapper>
    );
}
const mapStateToProps = (state) =>{
    return {
        state
    }
}
export default connect(mapStateToProps)(App);