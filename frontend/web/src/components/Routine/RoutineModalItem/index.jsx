import React from 'react';
import Wrapper from './styles'
import {connect, useDispatch, useSelector} from 'react-redux';
import {DELETE_ROUTINIZED_HABIT_REQUEST} from '../../../reducers/routine';

function App(props){
    let dispatch = useDispatch();
    let {myRoutines} = useSelector((state) => state.routine);
    //삭제하는 함수
    function deleteToDoItem(){
        dispatch({type:DELETE_ROUTINIZED_HABIT_REQUEST, id: myRoutines[props.num].RoutinizedHabits[props.itemIdx].id ,routineIdx: props.num , routineItemIdx: props.itemIdx})
    }
    return(
        <Wrapper>
            <span className="toDoItem">{myRoutines[props.num].RoutinizedHabits[props.itemIdx].Habit.name}</span><span className="minus btn" onClick={deleteToDoItem}>ㅡ</span>
        </Wrapper>
    );
}
const mapStateToProps = (state) =>{
    return {
        state
    }
  }
export default connect(mapStateToProps)(App);