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
  const { habit } = props
    return (
        <Wrapper>
            <Accordion className="panel" className='routine-item-check'>
                <AccordionSummary
                  className="check-summary"
                  aria-controls="panel1a-content"
                >
                  <h3>{habit.Habit.name}</h3>
                  <Checkbox color='primary' className='Mui-disabled'></Checkbox>
                </AccordionSummary>
                <AccordionDetails>
                  <ProgressItem habit={habit}/>
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