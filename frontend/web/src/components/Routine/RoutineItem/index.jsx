import React from 'react';
import Wrapper from './styles'
import Container from '@material-ui/core/Container';
import RoutineItemDetail from '../RoutineItemDetail/index';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
  } from '@material-ui/core';
function App(props){
    return(
        <Wrapper>
            <Container maxWidth="lg">
            <Accordion className="panel" className='routine-item'>
                <AccordionSummary
                  className="panel-summary"
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h2 className="title">{props.routineId}</h2>
                </AccordionSummary>
                <AccordionDetails className ='details'>
                  <RoutineItemDetail/>
                  <div className='button-div'><button onClick={props.openModal}>+</button></div>
                </AccordionDetails>
              </Accordion>
              </Container>
        </Wrapper>
    );
}
export default App;