import React from 'react';
import Wrapper from './styles'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem
  } from '@material-ui/core';
import RoutineItemCheck from '../RoutineItemCheck/index';
function App(props){
    return(
        <Wrapper>
            <Accordion className="panel" className='routine-list-item'>
                <AccordionSummary
                  className="panel-summary"
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h2 className="title">{props.routineId}</h2>
                </AccordionSummary>
                <AccordionDetails className='routine-list-item-detail'>
                  <List class='accordian-detail-list'>
                    <ListItem className='items'>
                    <RoutineItemCheck routineId='하루 10분 명상'/>
                    </ListItem>
                    <ListItem className='items'>
                    <RoutineItemCheck routineId='오늘의 다짐 작성'/>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
        </Wrapper>
    );
}
export default App;