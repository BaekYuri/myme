import React from 'react';
import Wrapper from './styles'
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
import { OPEN_CREATE_ROUTINE_MODAL } from '../../../reducers/modal';

function App(props){
  const dispatch = useDispatch()
  
  const openCreateRoutine = () => {
    dispatch({
      type: OPEN_CREATE_ROUTINE_MODAL
    })
  }
  return(
      <Wrapper onClick={openCreateRoutine}>
          + 루틴 생성
      </Wrapper>
  );
}
const mapStateToProps = (state) =>{
    return {
        state
    }
  }
export default connect(mapStateToProps)(App);