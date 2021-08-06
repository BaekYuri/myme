import React,{useState} from 'react';
import Wrapper from './styles'
import RoutineModalItem from '../RoutineModalItem/index'
import ReactDragList from 'react-drag-list'
import {connect, useSelector} from 'react-redux';

function App(props){
  const { myRoutines } = useSelector((state) => state.routine) 
  const { num } = props
    let routinizedHabit = myRoutines[num]?.routinizedHabit;

    //순서 변경 함수
    function changeOrder(e){
        // props.dispatch(setOrder({idx : props.num}));
    }
    return(
        <Wrapper>
            {
                routinizedHabit?
                <ReactDragList
                dataSource={routinizedHabit}
                row={(item, idx) => <RoutineModalItem key={item.id} num={num} itemIdx={idx}/>}
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