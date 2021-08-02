import React from 'react';
import Wrapper from './styles'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Checkbox
  } from '@material-ui/core';
import ProgressItem from '../ProgressItem/index';
function App(props){
    return(
        <Wrapper>
            <Accordion className="panel" className='routine-item-check'>
                <AccordionSummary
                  className="check-summary"
                  aria-controls="panel1a-content"
                >
                  <h3>{props.routineId}</h3>
                  <Checkbox color='primary' className='Mui-disabled'></Checkbox>
                </AccordionSummary>
                <AccordionDetails>
                  <ProgressItem/>
                </AccordionDetails>
              </Accordion>
        </Wrapper>
    );
}
export default App;