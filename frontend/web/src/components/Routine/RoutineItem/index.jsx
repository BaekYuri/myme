import React from 'react';
import Wrapper from './styles'
import RoutineItemDetail from '../RoutineItemDetail/index';
import {Settings, Save, Delete,AddCircle} from '@material-ui/icons'
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@material-ui/core';
import { OPEN_ROUTINE_MODAL, OPEN_CREATE_ROUTINE_MODAL } from '../../../reducers/modal';
import { SET_CHOOSED_ROUTINE, DELETE_ROUTINE, SET_MODAL_INPUT} from '../../../reducers/routine';
function App(props){
  const dispatch = useDispatch()
  const { myRoutines, choosedRoutine } = useSelector((state) => state.routine)
    const { num } = props;
    function openRoutine(){
      dispatch({type: SET_CHOOSED_ROUTINE, idx:props.num});
      dispatch({
        type: OPEN_ROUTINE_MODAL
      });
    }
    function openCreateRoutine(){
      dispatch({type: SET_CHOOSED_ROUTINE, idx:props.num});
      dispatch({type: OPEN_CREATE_ROUTINE_MODAL});
      dispatch({type: SET_MODAL_INPUT, idx: props.num});
    }
    function deleteRoutines(){
      dispatch({type: SET_CHOOSED_ROUTINE, idx:props.num});
      dispatch({type: DELETE_ROUTINE});

    }
    return(
        <Wrapper>
            <Accordion className="panel" className='routine-item'>
                <AccordionSummary
                  className="panel-summary"
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h2 className="title">{myRoutines[num]?.name}</h2>
                </AccordionSummary>
                <AccordionDetails className ='details'>
                  <RoutineItemDetail num = {props.num}/>
                  <div className='button-div'>
                    <Settings className="btn modify-btn" id='setting-btn' onClick={openCreateRoutine}></Settings>
                    <Delete className='btn modify-btn' id='delete-btn' onClick ={deleteRoutines}></Delete>
                    <Save className="btn modify-btn" id='save-btn'></Save>
                    <AddCircle onClick={openRoutine} className='btn modify-btn' id='add-btn'>+</AddCircle>
                    </div>
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
