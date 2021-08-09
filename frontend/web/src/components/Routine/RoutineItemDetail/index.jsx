import React,{useState} from 'react';
import Wrapper from './styles'
import RoutineModalItem from '../RoutineModalItem/index'
import ReactDragList from 'react-drag-list'
import {connect, useSelector, useDispatch} from 'react-redux';

function App(props){
  const { myRoutines } = useSelector((state) => state.routine) 
  const dispatch = useDispatch()
  const { num } = props
    let routinizedHabit = myRoutines[num].RoutinizedHabits;
    //순서 변경 함수
    function changeOrder(e){
        // let old = routinizedHabit[e.oldIndex]
    }
    return(
        <Wrapper>
            {
                routinizedHabit.length?
                <ReactDragList
                dataSource={routinizedHabit}
                row={(item, idx) => <RoutineModalItem rowKey={item.order} num={num} itemIdx={idx}/>}
                handles = {false}
                onUpdate = {changeOrder}
                
                />
                :
                <div className="default-box">루틴 일정을 추가해주세요.</div>
            }
        </Wrapper>
    );
}

const mapStateToProps = (state) =>{
    return {
        state
    }
  }
export default connect(mapStateToProps)(App);