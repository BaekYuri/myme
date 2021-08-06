import React from 'react';
import Wrapper from './styles'
import {connect, useDispatch, useSelector} from 'react-redux';
import {DELETE_ROUTINE_ITEM} from '../../../reducers/routine';

function App(props){
    let dispatch = useDispatch();
    let myRoutines = useSelector((state) => state.routine);
    //삭제하는 함수
    function deleteToDoItem(){
        dispatch({type:DELETE_ROUTINE_ITEM ,routineIdx: props.num , routineItemIdx: props.itemIdx})
    }
    return(
        <Wrapper>
            <span className="toDoItem">{myRoutines[props.num].routinizedHabit[props.itemIdx].habitName}</span><span className="minus btn" onClick={deleteToDoItem}>ㅡ</span>
        </Wrapper>
    );
}
const mapStateToProps = (state) =>{
    return {
        state
    }
  }
export default connect(mapStateToProps)(App);