import React, { useEffect } from 'react';
import Wrapper from './styles'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem
  } from '@material-ui/core';
import RoutineItemCheck from '../RoutineItemCheck/index';
// import { useSelector } from 'react-redux';

const App = (props) => {
  const { routine, routineIdx } = props

  return(
    <Wrapper>
      <Accordion className="panel" className='routine-list-item'>
        <AccordionSummary
          className="panel-summary"
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className="title">{routine.name}</h3>
        </AccordionSummary>
        <AccordionDetails className='routine-list-item-detail'>
          <List className='accordian-detail-list'>
            {
              routine.RoutinizedHabits
                ? (
                  routine.RoutinizedHabits.map((habit, idx) => {
                    return (
                      <ListItem className='items' key={idx}>
                        <RoutineItemCheck habit={habit} routineIdx={routineIdx} routinizedHabitIdx={idx} />
                      </ListItem>
                    )
                  })
                )
                : null
            }
          </List>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
}

export default App;
